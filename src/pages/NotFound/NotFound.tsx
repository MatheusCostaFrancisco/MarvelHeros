import React from 'react';
import page from '../../assets/Images/404.jpg';
import { Logo } from '../../components/Atoms/Logo/Logo';
import './style.css';

function NotFound() {
  return (
    <div>
      <div className="not-found__header">
        <Logo size="small" />
      </div>
      <div className="not-found__content">
        <img src={page} alt="404 = Página não encontrada" />
        <div>
          Imagem Fornecida por:{' '}
          <a href="https://br.freepik.com/fotos-vetores-gratis/erro">
            https://br.freepik.com/fotos-vetores-gratis/erro
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
