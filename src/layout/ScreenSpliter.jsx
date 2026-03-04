import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Panel = styled.div`
  display: flex;
  flex: ${(p) => p.flex};
  background-color: ${(p) => p.backgroundColor};
`;
function ScreenSpliter({
  children,
  leftWidth,
  rightWidth,
  leftBackgroundColor,
  rightBackgroundColor,
}) {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth} backgroundColor={leftBackgroundColor}>
        {left}
      </Panel>
      <Panel flex={rightWidth} backgroundColor={rightBackgroundColor}>
        {right}
      </Panel>
    </Container>
  );
}

export default ScreenSpliter;
