import { useState } from 'react';
import BackButton from '../BackButton';

export default function TipCalculator() {
  return (
    <div className='bg-emerald-100 sm:flex sm:h-screen font-space'>
      <BackButton />
      <div className='w-full sm:mx-auto sm:w-2/5 bg-emerald-100 sm:min-w-fit'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className='flex flex-col text-2xl text-emerald-700 tracking-widest p-8 bg-emerald-100'>
      <p className='mx-auto'>SPLI</p>
      <p className='mx-auto'> TTER</p>
    </div>
  );
}

function TipButton({ percentage, handler, tip }) {
  return (
    <button
      onClick={() => handler(percentage / 100 === tip ? 0 : percentage / 100)}
      className={`py-2 text-center text-2xl text-white rounded-lg ${
        percentage / 100 === tip ? 'bg-emerald-600' : 'bg-emerald-900'
      }`}
    >
      {' '}
      {percentage}%{' '}
    </button>
  );
}

function ResetButton({ handleReset }) {
  return (
    <button
      className='bg-emerald-500 rounded-lg p-2 text-xl text-emerald-900'
      onClick={() => handleReset()}
    >
      {' '}
      RESET{' '}
    </button>
  );
}

function Input({ label, handler, value }) {
  return (
    <div className='flex flex-col gap-1 pt-8 mb-5'>
      <label className='text-emerald-800' htmlFor={label}>
        {' '}
        {label}{' '}
      </label>
      <input
        value={value ? value : ' '}
        onChange={(e) => handler(e.target.value)}
        placeholder='0.00'
        className='outline-0 text-emerald-700 text-2xl text-right bg-slate-100 p-2'
        name={label}
        type='number'
        required
      />{' '}
    </div>
  );
}

function Main() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const handleTip = (e) => {
    setTip(e);
    console.log(tip);
  };
  const handleBill = (e) => {
    if (Number(e) > -1) Number(e) < 100000 ? setBill(e) : setBill(99999);
  };
  const handlePeople = (e) => {
    if (Number(e) > -1) Number(e) < 1000 ? setPeople(e) : setPeople(999);
  };

  const handleReset = () => {
    setPeople(0);
    setTip(0);
    setBill(0);
  };

  return (
    <div className='px-12 sm:pl-14 rounded-t-3xl bg-white sm:flex sm:min-w-fit sm:gap-10 sm:p-6'>
      <div className='sm:w-1/2'>
        <Input label={'Bill'} handler={handleBill} value={bill} />
        <SelectTip handleTip={handleTip} tip={tip} />{' '}
        <Input label='Number of People' handler={handlePeople} value={people} />
      </div>
      <TipBox
        bill={bill}
        people={people}
        percentage={tip}
        handleReset={handleReset}
      />
    </div>
  );
}

function SelectTip({ handleTip, tip }) {
  const [input, setInput] = useState('');
  return (
    <div>
      <h2 className='pb-3 text-emerald-800'> Select tip %</h2>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
        <TipButton percentage={5} handler={handleTip} tip={tip} />
        <TipButton percentage={10} handler={handleTip} tip={tip} />
        <TipButton percentage={15} handler={handleTip} tip={tip} />
        <TipButton percentage={25} handler={handleTip} tip={tip} />
        <TipButton percentage={50} handler={handleTip} tip={tip} />

        <input
          onChange={(e) => {
            if (Number(e.target.value) > -1) {
              handleTip(
                Number(e.target.value) < 100 ? Number(e.target.value) / 100 : 1
              );
              setInput(e.target.value);
            }
          }}
          value={(tip * 100).toFixed(0)}
          type='number'
          placeholder='Custom'
          className={`bg-emerald-900 text-center placeholder-white focus:placeholder-slate-400 sm:text-xl outline-0 text-white text-2xl rounded-lg`}
        />
      </div>
    </div>
  );
}

function TipBox({ bill, people, percentage, handleReset }) {
  const tip = bill * percentage;
  const tipPerPerson = tip / people;
  const totalPerson = bill / people + tipPerPerson;
  return (
    <div className='p-6 bg-emerald-900 rounded-xl text-white flex flex-col gap-3 pb-3 sm:pb-6 sm:min-w-fit sm:w-1/2 sm:place-content-between sm:pt-12'>
      <div className='flex flex-col sm:gap-12 gap-5'>
        <div className='flex place-content-between'>
          <div>
            <h1 className='text-lg'>Tip Amount</h1>
            <p className='text-slate-300 text-xs'>/ person</p>
          </div>
          <p className='text-3xl text-emerald-300 sm:text-5xl w-96 text-end'>
            ${isFinite(tipPerPerson) ? tipPerPerson.toFixed(2) : '0.00'}
          </p>
        </div>
        <div className='flex place-content-between'>
          <div>
            <h1 className='text-lg'>Total</h1>
            <p className='text-slate-300 text-xs'>/ person</p>
          </div>
          <p className='text-3xl text-emerald-300 sm:text-5xl w-96 text-end'>
            ${isFinite(totalPerson) ? totalPerson.toFixed(2) : '0.00'}
          </p>
        </div>
      </div>

      <ResetButton handleReset={handleReset} />
    </div>
  );
}
