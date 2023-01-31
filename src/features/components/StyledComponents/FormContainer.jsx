export default function FormContainer(props) {
  const { className, children, ...rest } = props;

  let classes = 'w-full';

  if (className) {
    classes += ' ' + className;
  }

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
