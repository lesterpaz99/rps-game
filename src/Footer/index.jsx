import 'nes.css/css/nes.min.css';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<div className='social-media'>
				<span>Let's talk: </span>
				<ul className='icon-list'>
					<li>
						<a
							href='https://www.linkedin.com/in/obed-paz-5b1379207/'
							target='_blank'
							className='nes-icon linkedin is-small'
						></a>
					</li>
					<li>
						{' '}
						<a
							href='https://github.com/lesterpaz99'
							target='_blank'
							className='nes-icon github is-small'
						></a>
					</li>
					<li>
						<a
							href='https://twitter.com/LesterObedPaz'
							target='_blank'
							className='nes-icon twitter is-small'
						></a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/_obed.paz/'
							target='_blank'
							className='nes-icon instagram is-small'
						></a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export { Footer };
