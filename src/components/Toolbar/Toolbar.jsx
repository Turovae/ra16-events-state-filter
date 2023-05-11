import './Toolbar.css';

const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props;

  const notSelectedItemClass = 'toolbar__item';
  const selectedItemClass = 'toolbar__item toolbar__item_selected';

  return (
    <ul className='portfolio__toolbar'>
      {
        filters.map((filter, index) => <li
          className={filter === selected ? selectedItemClass : notSelectedItemClass}
          key={index}
          onClick={(evt) => {
            evt.preventDefault();
            onSelectFilter(filter);
          }}
          >{filter}</li>)
      }
    </ul>
  )
};

export default Toolbar;
