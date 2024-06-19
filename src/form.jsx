/* eslint-disable react/prop-types */
import { useState } from 'react';

function App() {
  return (
    <div className='flex bg-emerald-50 h-screen'>
      <Form />;
    </div>
  );
}

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = function () {
    setSubmitted(true);
  };

  return (
    <div className='container text-slate-700 p-8 m-auto min-w-fit w-2/5 bg-white rounded-xl'>
      <h1 className='font-bold text-3xl pb-4 text-black'> Contact Us </h1>
      <div className='flex gap-5'>
        <Input submitted={submitted} type='text' label='First Name' />
        <Input submitted={submitted} type='text' label='Last Name' />{' '}
      </div>
      <Input submitted={submitted} type='email' label='Email Address' />
      <Radio
        submitted={submitted}
        labels={['General Enquiry', 'Support Request']}
      />
      <Input submitted={submitted} type='textarea' label='Message' />
      <Input
        submitted={submitted}
        type='checkbox'
        label='I consent to being contacted by the team'
      />
      <Submit handler={handleSubmit} />
    </div>
  );
}

function Label({ label, labelFor }) {
  return (
    <label htmlFor={labelFor} className='p-1 text-sm font-semibold'>
      {label} <em className='text-emerald-600'>*</em>{' '}
    </label>
  );
}

function Input({ type, label, submitted }) {
  const [value, setValue] = useState('');
  const [changed, setChanged] = useState(false);
  const handleInput = function (e) {
    setValue(e.target.value);
    setChanged(true);
  };
  const [checked, setChecked] = useState(false);
  const handleCheck = function () {
    setChecked(!checked);
  };
  const camelCaseLabel =
    label.split(' ').join('').slice(0, 1).toLowerCase() +
    label.split(' ').join('').slice(1);

  if (type === 'textarea') {
    return (
      <div className='flex py-2 gap-1 w-full flex-col'>
        <Label label={label} labelFor={camelCaseLabel} />
        <textarea
          required
          onChange={handleInput}
          className={`outline-none cursor-pointer hover:border-emerald-800 focus:border-emerald-600 p-2 w-full border h-32 rounded-md  ${
            submitted && value.length < 1
              ? 'border-red-300'
              : 'border-slate-400'
          }`}
          id={camelCaseLabel}
        />
        <p
          className={`text-sm text-red-600  ${
            submitted && value.length < 1 ? 'block' : 'hidden'
          }`}
        >
          {' '}
          This field is required.
        </p>
      </div>
    );
  }
  if (type === 'checkbox') {
    return (
      <div
        className={`flex py-2 gap-1 my-4 ${
          submitted && !checked ? 'text-red-600' : ''
        }`}
      >
        <input
          required
          className={`outline-none accent-emerald-600 cursor-pointer focus:border-emerald-600 p-4 border rounded-md border-slate-400  `}
          type={type}
          onChange={handleCheck}
          id={camelCaseLabel}
        />
        <Label label={label} labelFor={camelCaseLabel} />
        <p
          className={`text-sm text-red-600  ${
            submitted && !checked ? 'block' : 'hidden'
          }`}
        >
          {' '}
          This field is required.
        </p>
      </div>
    );
  }
  return (
    <div className='flex py-2 gap-1 w-full flex-col'>
      <Label label={label} labelFor={camelCaseLabel} />
      <input
        required
        className={` p-2 cursor-pointer w-full hover:border-emerald-800 border rounded-md border-slate-400 outline-none focus:border-emerald-600 ${
          label === 'Message' ? 'h-24' : ''
        } ${
          submitted && value.length < 1 && !changed
            ? 'border-red-500'
            : 'border-slate-400'
        }`}
        type={type}
        onChange={handleInput}
        id={camelCaseLabel}
      />
      <p
        className={`text-sm text-red-600  ${
          submitted && value.length < 1 ? 'block' : 'hidden'
        }`}
      >
        {' '}
        This field is required.
      </p>
    </div>
  );
}

function Radio({ labels, submitted }) {
  const [current, setCurrent] = useState('');
  const handleClick = function (e) {
    setCurrent(e.target.id);
  };
  const radioInputs = labels.map((e) => (
    <label
      key={labels.indexOf(e)}
      htmlFor={
        e.split(' ').join('').slice(0, 1).toLowerCase() +
        e.split(' ').join('').slice(1)
      }
      className={`flex w-full gap-4 p-3 border rounded-md border-slate-400 cursor-pointer ${
        e.split(' ').join('').slice(0, 1).toLowerCase() +
          e.split(' ').join('').slice(1) ===
        current
          ? 'bg-emerald-50 border-emerald-500'
          : ''
      } ${
        submitted && current.length < 1 ? 'border-red-500' : 'border-slate-400'
      }`}
    >
      <input
        required
        className='accent-emerald-600 peer'
        name='query-type'
        type='radio'
        onChange={handleClick}
        id={
          e.split(' ').join('').slice(0, 1).toLowerCase() +
          e.split(' ').join('').slice(1)
        }
      />
      <p className='font-semibold text-slate-500'>{e}</p>
    </label>
  ));

  return (
    <div className='py-2 flex flex-col gap-1 '>
      <label className='p-1 text-sm text-slate-600 font-semibold'>
        Query Type <em className='text-emerald-600'>*</em>{' '}
      </label>
      <div className='flex w-full flex-col '>
        <div className='flex w-full gap-5 cursor-pointer'>{radioInputs}</div>
      </div>
      <p
        className={`text-sm text-red-600  ${
          submitted && current.length < 1 ? 'block' : 'hidden'
        }`}
      >
        {' '}
        This field is required.
      </p>
    </div>
  );
}

function Submit({ handler }) {
  return (
    <button
      type='submit'
      onClick={handler}
      className='mx-auto hover:bg-emerald-800 rounded-xl w-full p-4 text-white font-semibold bg-emerald-700'
    >
      Submit
    </button>
  );
}

export default App;
