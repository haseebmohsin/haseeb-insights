export default function ErrorMessageComponent(props) {
  const { className, ...rest } = props;
  let classes = 'mt-1 text-sm font-bold text-red-600';

  if (className) {
    classes += ' ' + className;
  }

  return <div className={classes} {...rest}></div>;
}
