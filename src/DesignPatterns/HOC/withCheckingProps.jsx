export const withCheckingProps = (WrappedComponent) => {
  return (props) => {
    console.log(props);

    return <WrappedComponent {...props} />;
  };
};
