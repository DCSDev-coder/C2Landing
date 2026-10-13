const siteUrl = 'https://c2coffeeandcandle.com'
const socialImage = `${siteUrl}/social-preview.webp`

export const pageSeo = {
  '/': {
    title: 'C2 Coffee + Candle | Coffee Shop, Signature Blends, Barista Drinks & Cafe Moments',
    description: 'C2 Coffee + Candle is a coffee shop in Eco Forest, Semenyih serving signature blends, barista-crafted drinks, mocktails, matcha, chocolate, and warm cafe experiences.',
    robots: 'index, follow',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CafeOrCoffeeShop',
      name: 'C2 Coffee + Candle',
      url: `${siteUrl}/`,
      image: socialImage,
      description: 'Specialty coffee shop and lifestyle cafe in Eco Forest, Semenyih serving signature blends, barista drinks, mocktails, matcha, chocolate, and hand-poured candles.',
      servesCuisine: ['Coffee', 'Cafe', 'Desserts', 'Drinks'],
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '42, Jalan Eco Forest 6/1C, Eco Forest',
        addressLocality: 'Semenyih',
        addressRegion: 'Selangor',
        postalCode: '43500',
        addressCountry: 'MY',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '2.9238', longitude: '101.8797' },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '07:00', closes: '20:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday', 'Sunday'], opens: '07:00', closes: '22:00' },
      ],
      email: 'support@c2coffeeandcandle.com',
      sameAs: [
        'https://www.instagram.com/c2coffeecandle/',
        'https://www.tiktok.com/@c2coffeecandle',
        'https://play.google.com/store/apps/details?id=com.c2coffeeandcandle.customer',
      ],
    },
  },
  '/download': { title: 'Download App | C2 Coffee + Candle Mobile Ordering & Loyalty Rewards', description: 'Download the official C2 Coffee + Candle app on Google Play to order drinks, earn coffee tokens, unlock VIP tiers, and enjoy seamless cafe pickups.', robots: 'index, follow' },
  '/get-in-touch': { title: 'Get In Touch & Visit Us | C2 Coffee + Candle Eco Forest Semenyih', description: 'Find directions, opening hours, and contact details for C2 Coffee + Candle in Eco Forest, Semenyih, Selangor. Dine in or take away today.', robots: 'index, follow' },
  '/collaborations': { title: 'Collaborations & Events | C2 Coffee + Candle Partner Programs', description: 'Partner with C2 Coffee + Candle for popups, brand collaborations, creative events, and sensory coffee + candle activations.', robots: 'index, follow' },
  '/tiers': { title: 'C2 Loyalty Tiers & Rewards | Member Perks & Exclusive Benefits', description: 'Explore C2 Coffee member tiers from Bronze to Black Diamond. Enjoy complimentary coffee tokens, birthday perks, and member-only specials.', robots: 'index, follow' },
  '/privacy-policy': { title: 'Privacy Policy | C2 Coffee + Candle', description: 'Privacy Policy and data practices for C2 Coffee + Candle website and mobile app users.', robots: 'index, follow' },
  '/terms-of-service': { title: 'Terms of Service | C2 Coffee + Candle', description: 'Terms of Service for C2 Coffee + Candle website, services, and mobile ordering.', robots: 'index, follow' },
  '/refund-policy': { title: 'Refund Policy | C2 Coffee + Candle', description: 'Customer refund, return, and cancellation policies for C2 Coffee + Candle orders.', robots: 'index, follow' },
  '/delete-account': { title: 'Delete Account | C2 Coffee + Candle Mobile App', description: 'Request account deletion and data removal for your C2 Coffee mobile application account.', robots: 'noindex, follow' },
}

export const notFoundSeo = {
  title: 'Page Not Found | C2 Coffee + Candle',
  description: 'The requested C2 Coffee + Candle page could not be found.',
  robots: 'noindex, nofollow',
}

export { siteUrl, socialImage }
