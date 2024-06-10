import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='grow'>{children}</main>
      <Footer />
    </>
  );
}
