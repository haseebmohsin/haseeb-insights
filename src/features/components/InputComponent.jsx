export default function InputComponent(props) {
  const { className, field, form, ...rest } = props;
  let classes = 'p-3 text-lg rounded w-full bg-theme-inputBg text-theme-white';

  if (className) {
    classes += ' ' + className;
  }

  return <input className={classes} {...field} {...rest} />;
}
