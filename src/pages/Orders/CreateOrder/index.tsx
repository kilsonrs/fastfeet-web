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

interface CreateOrderForm {
  recipient: string;
  deliveryman: string;
  package_name: string;
}

const CreateOrder: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [recipients, setRecipients] = useState<IRecipients[]>([]);
  const [delivereres, setDeliverers] = useState<IDeliverers[]>([]);
  const history = useHistory();

  useEffect(() => {
    api.get('/recipients').then(response => setRecipients(response.data));
    api.get('/deliverers').then(response => setDeliverers(response.data));
  }, []);

  const submitForm = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  const handleSubmit = useCallback(
    async (data: CreateOrderForm) => {
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

        await api.post('/orders', data);

        toast.success('Encomenda cadastrada');
        history.push('/orders');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          toast.error('Erro ao cadastrar encomenda');
        }
      }
    },
    [history],
  );

  const recipientOptions = useMemo(() => {
    return recipients.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));
  }, [recipients]);

  const deliverymanOptions = useMemo(() => {
    return delivereres.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));
  }, [delivereres]);

  return (
    <Container>
      <FormHeader title="Cadastrar encomendas" handleSubmit={submitForm} />
      <Content onSubmit={handleSubmit} ref={formRef}>
        <span>
          <strong>Destinatário</strong>
          <SelectInput name="recipient" options={recipientOptions} />
        </span>
        <span>
          <strong>Entregador</strong>
          <SelectInput name="deliveryman" options={deliverymanOptions} />
        </span>
        <span className="package_name">
          <strong>Nome do produto</strong>
          <Input name="package_name" type="text" />
        </span>
      </Content>
    </Container>
  );
};

export default CreateOrder;
