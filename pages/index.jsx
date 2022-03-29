import Navigation from '../components/Navigation/Navigation'
import Head from 'next/head'

const Home = () => {
  return (
  <div>
	  <Head>
			<script src="https://cdn.tiny.cloud/1/1accbkdrtl58umt8rjxmieczwpayalaf4aj5awqq0zl1ym49/tinymce/5/tinymce.min.js"></script>
		</Head>
	  <Navigation/>
	</div>
  );
}

export default Home