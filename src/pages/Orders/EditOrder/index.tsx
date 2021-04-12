import { FormHandles } from '@unform/core';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import getValidationErrors from '../../../utils/getValidationErrors';

import FormHeader from '../../../components/FormHeader';
import Input from '../../../components/Input';
import SelectInput from '../../../components/SelectInput';
import api from '../../../services/api';

import { Container, Content } from './styles';

interface IRecipients {
  id: string;
  name: string;
  address: string;
}

interface IDeliverers {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

interface EditOrderForm {
  recipient: string;
  deliveryman: string;
  product: string;
}

interface EditOrderParams {
  id: string;
  recipient: string;
  deliveryman: string;
  package_name: string;
}

const EditOrder: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [recipients, setRecipients] = useState<IRecipients[]>([]);
  const [delivereres, setDeliverers] = useState<IDeliverers[]>([]);
  const history = useHistory<EditOrderParams>();
  const {
    id: orderId,
    recipient: recipientName,
    deliveryman: deliverymanName,
    package_name,
  } = history.location.state;

  useEffect(() => {
    const loadOptions = async () => {
      const getRecipients = api.get('/recipients');
      const getDeliverers = api.get('/deliverers');

      Promise.all([getRecipients, getDeliverers]).then(responses => {
        setRecipients(responses[0].data);

        const recipient = responses[0].data.filter(
          (item: { name: string }) => item.name === recipientName,
        )[0];

        formRef.current?.setFieldValue('recipient', {
          value: recipient.id,
          label: recipientName,
        });

        setDeliverers(responses[1].data);

        const deliveryman = responses[1].data.filter(
          (item: { name: string }) => item.name === deliverymanName,
        )[0];

        formRef.current?.setFieldValue('deliveryman', {
          value: deliveryman.id,
          label: deliverymanName,
        });

        formRef.current?.setFieldValue('package_name', package_name);
      });
    };
    loadOptions();
  }, [recipientName, deliverymanName, package_name]);

  const submitForm = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  const handleSubmit = useCallback(
    async (data: EditOrderForm) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          deliveryman: Yup.string().required('Entregador é obrigatório.'),
          recipient: Yup.string().required('Destinatário é obrigatório.'),
          package_name: Yup.string().required('Nome do produto é obrigatório.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.put(`/orders/${orderId}`, data);

        toast.success('Encomenda atualizada');
        history.push('/orders');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          toast.error('Erro ao atualizar encomenda');
        }
      }
    },
    [history, orderId],
  );

  const recipientOptions = useMemo(() => {
    const parsedRecipients = recipients.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    return parsedRecipients;
  }, [recipients]);

  const deliverymanOptions = useMemo(() => {
    return delivereres.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));
  }, [delivereres]);

  return (
    <Container>
      <FormHeader title="Edição de encomendas" handleSubmit={submitForm} />
      <Content onSubmit={handleSubmit} ref={formRef}>
        <span>
          <strong>Destinatário</strong>
          <SelectInput name="recipient" options={recipientOptions} />
        </span>
        <span>
          <strong>Entregador</strong>
          <SelectInput name="deliveryman" options={deliverymanOptions} />
        </span>
        <span className="product">
          <strong>Nome do produto</strong>
          <Input name="package_name" type="text" />
        </span>
      </Content>
    </Container>
  );
};

export default EditOrder;
