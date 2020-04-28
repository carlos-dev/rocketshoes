import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import {Container, ProductTable, Total} from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <th />
          <th>Produto</th>
          <th>Qtd</th>
          <th>Subtotal</th>
          <th />
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x"
                alt="tênis"
              />
            </td>

            <td>
              <strong>tênis massa</strong>
              <span>R$129,90</span>
            </td>

            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$258,90</strong>
            </td>

            <td>
              <button>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button>Finalizar pedido</button>

        <Total>
          <span>total:</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
