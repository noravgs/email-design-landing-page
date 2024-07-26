import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Elevate Your Email Campaigns with Our Expert Design and Setup Service"
    description=""
  >
    <VerticalFeatureRow
      title="Achieve Impressive Results with Our Proven Email Designs"
      description="Are you looking to boost your email marketing efforts? Look no further! Our email design and setup service consistently delivers outstanding results, boasting a 55% open rate and a 22% click-through rate.

      "
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Stunning Designs Made Easy"
      description="All our email designs are crafted using Canva, ensuring they are not only visually appealing but also easy for you to edit and customize after delivery. Whether you need to make minor tweaks or significant changes, Canva's user-friendly interface makes it a breeze."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Comprehensive Email Campaign Setup"
      description="Need help setting up your email campaigns? We’ve got you covered! With extensive experience in Mailchimp, we can help you configure your campaigns and devise strategies to maximize your success. From audience segmentation to automation, we ensure your email campaigns are set up for success."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Why Choose Us?"
      description="Proven Performance: 
      Consistent 55% open rate and 22% click rate.
      Customizable Designs: Easy-to-edit Canva designs tailored to your brand.
      Expert Setup: Comprehensive setup and strategy with Mailchimp.
      "
      image="/assets/images/feature4.svg"
      imageAlt="Third feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
