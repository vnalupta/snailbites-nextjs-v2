import '@/styles/styles.scss';
import Jumbotron from '@/components/jumbotron';
import Mountains from '@/components/mountains';

export default function Home() {
  return (
    <main role="main">
      <header>
        <Jumbotron />
        <Mountains />
      </header>
    </main>
  )
}
