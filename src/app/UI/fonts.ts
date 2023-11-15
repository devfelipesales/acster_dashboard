import { Nunito, Lusitana } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const Fonts = {
  nunito,
  lusitana,
};
