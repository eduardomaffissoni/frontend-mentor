export default function BackButton() {
  return (
    <a href='/'>
      <div className='absolute font-extrabold p-4 rounded-full top-5 left-5 cursor-pointer'>
        <img
          className='stroke-slate-950 w-8'
          src='./src/assets/chevron.svg'
        ></img>
      </div>
    </a>
  );
}
