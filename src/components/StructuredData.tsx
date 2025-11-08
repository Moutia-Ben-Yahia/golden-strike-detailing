import { Helmet } from 'react-helmet-async';

export const StructuredData = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'CleanStrike Unit',
    description:
      'Professional mobile car detailing service in Monaco. Premium interior & exterior cleaning, ceramic coating, and maintenance plans.',
    image: 'https://cleanstrikeunit.com/og-image.jpg',
    url: 'https://cleanstrikeunit.com',
    telephone: '+33688911561',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Monaco',
      addressCountry: 'MC',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.7384,
      longitude: 7.4246,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Monaco',
      },
      {
        '@type': 'City',
        name: 'Monte Carlo',
      },
      {
        '@type': 'City',
        name: 'Beausoleil',
      },
      {
        '@type': 'City',
        name: 'Menton',
      },
      {
        '@type': 'City',
        name: 'Roquebrune-Cap-Martin',
      },
      {
        '@type': 'City',
        name: 'Nice',
      },
      {
        '@type': 'City',
        name: 'Eze',
      },
      {
        '@type': 'City',
        name: 'Cap-d\'Ail',
      },
      {
        '@type': 'City',
        name: 'Villefranche-sur-Mer',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '00:00',
      },
    ],
    sameAs: ['https://instagram.com/cleanstrike_'],
    serviceType: [
      'Mobile Car Detailing',
      'Interior Car Cleaning',
      'Exterior Car Cleaning',
      'Ceramic Coating',
      'Engine Bay Cleaning',
      'Headlight Restoration',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Car Detailing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Detailing Service',
            description:
              'Complete interior and exterior detailing for a showroom-perfect finish',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Interior Detailing',
            description:
              'Deep cleaning of seats, carpets, dashboard, and all interior surfaces',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Exterior Detailing',
            description:
              'Thorough exterior wash, polish, and protection for your vehicle',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ceramic Coating',
            description: 'Long-lasting paint protection and superior shine',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};
