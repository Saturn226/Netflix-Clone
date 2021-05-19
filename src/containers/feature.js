import { Feature } from '../components';

export function FeatureContainer({ children, ...restProps }) {
  return (
    <Feature>
      <Feature.Title>Feature Title</Feature.Title>
      <Feature.SubTitle>FeatureSubtitle</Feature.SubTitle>
    </Feature>
  );
}
