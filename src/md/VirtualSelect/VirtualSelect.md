## Exemplos

```jsx
const tiposSolicitacao = [{"id":812,"nome":"Deslocamento para Treinamento"},{"id":822,"nome":"Deslocamento - Hospedagens diárias e passagens"}];
const solicitacao = {  
        tipo: {
          id:null,
          nome:null
        }
      };
const erroSolicitacao = {};

<VirtualSelect  
  placeholder="Tipo de deslocamento"
  // label="Tipo de deslocamento"
  itemLabel="nome"
  onSelect={value => this.handleChange({ field: 'tipo_id', value })}  
  items={tiposSolicitacao}
  labelKey="nome"
  valueKey="id"
  menuWidth={1200}
  menuRowHeight={35}
  className="md-cell md-cell--12"   
/>
```