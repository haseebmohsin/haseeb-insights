export default function GridComponent(props) {
  const { className, children, cols, rows, gap, ...rest } = props;

  const makeStyles = () => {
    let classes = 'grid ';

    if (className) {
      classes += ' ' + className + ' ';
    }

    if (cols) {
      classes += `grid-cols-${cols} `;
    }

    if (rows) {
      classes += `grid-rows-${rows} `;
    }

    if (gap) {
      classes += `gap-${gap} `;
    }

    return classes;
  };

  return (
    <div className={makeStyles()} {...rest}>
      {children}
    </div>
  );
}
