import React from 'react';

const validationComponent = (props) => {
  
  let textMsgSize = null;

  if(props.textSizer <= 5) {
    textMsgSize = (
      <div>
        <p>Texto muito curto!</p>
        <div>
          <p>Texto menor ou igual a 5 caracteres;</p>
        </div>
      </div>
    );
  } else if(props.textSizer >= 10) {
    textMsgSize = (
      <div>
        <p>Texto de tamanho suficiente!</p>
      </div>
    );
  }
  
  return (
    <div>
      <p>Tamanho da String: {props.textSizer}</p>
      {textMsgSize}
    </div>
  );
}

export default validationComponent;
