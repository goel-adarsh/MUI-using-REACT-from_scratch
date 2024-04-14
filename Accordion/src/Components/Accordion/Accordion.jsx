import Item from '../Item/Item';

export default function Accordion() {
  return (
    <>
      <div
        className="accordion"
        style={{
          width: '700px',
          margin: '80px auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <Item number={0} />
        <Item number={1} />
        <Item number={2} />
      </div>
    </>
  );
}
