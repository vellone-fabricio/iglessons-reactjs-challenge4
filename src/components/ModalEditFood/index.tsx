import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IFood } from '../../types/global-types';
import { FormHandles } from '@unform/core';

interface IModalEditFood {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: IFood) => Promise<void>;
  editingFood: IFood;
}

export function ModalEditFood({ isOpen, setIsOpen, handleUpdateFood, editingFood }: IModalEditFood) {
  const formRef = createRef<FormHandles>();

  const handleSubmit = async (data: any) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon=""/>

        <Input name="name" placeholder="Ex: Moda Italiana" icon=""/>
        <Input name="price" placeholder="Ex: 19.90" icon=""/>

        <Input name="description" placeholder="Descrição" icon=""/>

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
