import React, { useEffect, useState } from 'react';
import '@styles/style.scss';

// Types

interface Param {
  id: number;
  name: string;
  type?: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  //colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

// Init data

const paramsWear = [
  {
    id: 1,
    name: 'Назначение',
    type: 'string',
  },
  {
    id: 2,
    name: 'Длина',
    type: 'string',
  },
  {
    id: 3,
    name: 'Количество',
    type: 'number',
  },
];

const modelWear = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное',
    },
    {
      paramId: 2,
      value: 'макси',
    },
    {
      paramId: 3,
      value: '7',
    },
  ],
};

//

const formatInputType = (type: string) => {
  if (type === 'string') return 'text';
  else if (type === 'number') return 'number';
  else return 'text';
};

// Editor
const ParamEditor: React.FC<Props> = (props: Props) => {
  const [values, setValues] = useState({});

  const { params, model } = props;
  const { paramValues } = model;

  useEffect(() => {
    const obj = {};
    paramValues.forEach(({ paramId, value }) => (obj[paramId] = value));

    setValues(obj);
  }, [paramValues]);

  const changeValue = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const obj = { ...values };
    obj[id] = e.target.value;

    setValues(obj);
  };

  const getModel = () => {
    const newValues = paramValues.map(({ paramId }) => {
      return {
        paramId,
        value: values[paramId],
      };
    });

    const obj = {
      paramValues: newValues,
    };
    // eslint-disable-next-line no-console
    console.log(obj);
  };

  return (
    <div className="paramEditor">
      <form action="#" className="form">
        {params?.map(item => (
          <div key={item.id} className="fieldWrapper">
            <span className="label">{item.name}</span>

            <input
              type={formatInputType(item.type)}
              name={item.name}
              id={`field-${item.id}`}
              value={values[item.id] || ''}
              onChange={changeValue(item.id)}
            />
          </div>
        ))}

        <button type="button" className="btn" onClick={getModel}>
          OK
        </button>
      </form>
    </div>
  );
};

// Init App
const App: React.FC = () => {
  return (
    <main className="container">
      <h1>Editor</h1>

      <ParamEditor params={paramsWear} model={modelWear} />
    </main>
  );
};

export default App;
