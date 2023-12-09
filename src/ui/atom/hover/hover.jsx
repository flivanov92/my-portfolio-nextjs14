'use-client';
import * as S from '@/ui/atom/hover/hover.style';
import { SpeedInsights } from '@vercel/speed-insights/next';

const Hover = () => {
  return (
    <>
      <S.Container>
        <S.Card></S.Card>
        <S.Card></S.Card>
        <S.Card></S.Card>
        <S.Card></S.Card>
      </S.Container>
      <SpeedInsights />
    </>
  );
};

export default Hover;
