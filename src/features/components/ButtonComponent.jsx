function ButtonComponent(props) {
  const { className, variant, outline, text, size, children, ...rest } = props;

  const makeStyles = () => {
    let classes = 'px-4 py-1 rounded whitespace-nowrap ';

    if (className) {
      classes += ' ' + className + ' ';
    }

    if (size) {
      classes += `text-${size} `;
    }

    switch (text) {
      case 'primary':
        classes += 'text-theme-primary ';
        break;
      case 'secondary':
        classes += 'text-theme-secondary ';
        break;
      case 'danger':
        classes += 'text-theme-red ';
        break;
      default:
        classes += ' ';
        break;
    }

    switch (variant) {
      case 'primary':
        classes += 'bg-theme-primary ';
        break;
      case 'secondary':
        classes += 'bg-theme-primary ';
        break;
      case 'danger':
        classes += 'bg-theme-red ';
        break;
      default:
        classes += ' ';
        break;
    }

    switch (outline) {
      case 'primary':
        classes += 'border border-theme-primary ';
        break;
      case 'secondary':
        classes += 'border border-theme-primary ';
        break;
      case 'danger':
        classes += 'border border-theme-danger ';
        break;
      default:
        classes += ' ';
        break;
    }

    return classes;
  };

  return (
    <>
      <button className={makeStyles()} {...rest}>
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;
