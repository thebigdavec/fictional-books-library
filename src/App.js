import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [
				{ title: 'Falling Off Of A Cliff', author: 'Eileen Dover', contributor: 'Anonymous' },
				{ title: 'Showjumping', author: 'Major BottomSaw', contributor: 'Anonymous' },
				{ title: 'Just Kidding', author: 'Paul Duvverwon and Scott Belzon', contributor: 'Dave Collison' },
				{ title: 'A Quick Drink', author: 'Jean Antonique', contributor: 'Dave Collison' },
				{ title: 'Scattered Showers', author: 'Peter Patter and Em Burella', contributor: 'Dave Collison' },
				{ title: 'Working For The Council', author: 'Dustin Rhodes', contributor: 'Dave Collison' },
				{ title: 'Just Popping Out', author: 'Randy Corner', contributor: 'Dave Collison' },
				{ title: 'Cold Wind', author: 'I. C. Blast', contributor: 'Dave Collison' },
				{ title: "I Just Don't Get It", author: 'Uri Lee Stupid', contributor: 'Dave Collison' },
				{ title: 'The Backup Plan', author: 'Justin Case', contributor: 'Dave Collison' },
				{ title: 'Over My Head', author: 'Emma Thickorwott', contributor: 'Dave Collison' },
				{ title: 'Going To The Top', author: 'Ellie Vater', contributor: 'Dave Collison' },
				{ title: 'Hide From The Bailiff', author: 'Casey Knox', contributor: 'Dave Collison' },
				{ title: 'The Art Of Karaoke', author: 'Song Sung Wong', contributor: 'Dave Collison' },
				{ title: 'Idle Gossip', author: 'Lou Slips', contributor: 'Dave Collison' },
				{ title: 'Arachnophobia', author: 'Freyda Spiders', contributor: 'Dave Collison' },
				{ title: 'The Great Outdoors', author: 'Alf Resco', contributor: 'Dave Collison' },
				{ title: 'The Element Of Surprise', author: 'Oliver Sudden', contributor: 'Dave Collison' },
				{ title: 'Death Of A Superhero', author: 'R. Chennemy', contributor: 'Dave Collison' },
				{ title: 'Minimalism', author: 'Lester Better', contributor: 'Dave Collison' },
				{ title: 'In The Beginning', author: 'Tony Jusbegun', contributor: 'Dave Collison' },
				{ title: 'Not The End', author: 'Toby Continued', contributor: 'Dave Collison' },
				{ title: 'Our Story', author: 'Ewan Mee', contributor: 'Dave Collison' },
				{ title: "Where's My Dinner", author: 'R. Mungry', contributor: 'Dave Collison' },
				{ title: 'Stale Chinese Food', author: 'May Pong', contributor: 'Dave Collison' },
				{ title: 'Foods That Kill', author: 'Sam and Ella', contributor: 'Dave Collison' },
				{ title: 'A Sure Bet', author: 'Sindy Bagg', contributor: 'Dave Collison' },
				{ title: "If At First You Don't Succeed", author: 'Troy Harder', contributor: 'Dave Collison' },
				{ title: 'Home Alone', author: 'Dave Allgone', contributor: 'Dave Collison' },
				{ title: 'Bad Breakfast', author: 'Ronnie Yegg and Bernie Toast', contributor: 'Dave Collison' },
				{ title: 'Starving', author: 'Mal Nutrition', contributor: 'Dave Collison' },
				{ title: 'Jump Around', author: 'Lee Ping', contributor: 'Dave Collison' },
				{ title: 'Be Right With You', author: 'Old Donnamoe', contributor: 'Dave Collison' },
				{ title: 'Grumpy Old Man', author: 'Ken Tankerous', contributor: 'Dave Collison' },
				{ title: 'Enter The Tomb', author: 'Celia Fate', contributor: 'Dave Collison' },
				{ title: "We'll Get There", author: 'Helen Highwater', contributor: 'Dave Collison' },
				{ title: 'Locked Out', author: 'Micky Zargon and I. Gungadin', contributor: 'Dave Collison' },
				{ title: 'You Always Argue', author: 'Noah Doonot', contributor: 'Dave Collison' },
				{ title: 'Accident Prevention', author: 'Elton Safety', contributor: 'Dave Collison' },
				{ title: 'Approximately', author: 'Moira Less', contributor: 'Dave Collison' },
				{ title: "It's A Deal", author: 'Sheik Onnit', contributor: 'Dave Collison' },
				{ title: 'How To Open Doors', author: 'Ann Dools', contributor: 'Dave Collison' },
				{ title: 'Become A Top Quizzer', author: 'Noel D. Answers', contributor: 'Dave Collison' },
				{ title: 'Tough Punishment', author: 'Alitta Larsh', contributor: 'Dave Collison' },
				{ title: 'Petty Crimes', author: 'Miss Chief and Mister Meanor', contributor: 'Dave Collison' },
				{ title: 'Stop! Police!', author: 'Nina Neenaw', contributor: 'Dave Collison' },
				{ title: 'That Sinking Feeling', author: 'Mandy Lifeboats', contributor: 'Dave Collison' },
				{ title: 'Respect For Your Elders', author: 'Keiran D. Community', contributor: 'Dave Collison' },
				{ title: 'My Empathy', author: 'Ophelia Payne', contributor: 'Dave Collison' },
				{ title: 'Procrastinate', author: 'Tom Morrow', contributor: 'Dave Collison' },
				{ title: 'Under The Microscope', author: 'Molly Cule', contributor: 'Dave Collison' },
				{ title: 'Going Nowhere', author: 'Mick Arsbroke', contributor: 'Dave Collison' },
				{ title: 'Dodge The Bullet', author: "Rick O'Shay", contributor: 'Dave Collison' },
				{ title: 'Nowhere Near', author: 'Farrah Way', contributor: 'Dave Collison' },
				{ title: "I'm Not Doing It", author: 'Norah Mai', contributor: 'Dave Collison' },
				{ title: 'Market Research', author: 'Phyllis Formin', contributor: 'Dave Collison' },
				{ title: "I'm Not Constipated", author: 'Adana Dudu', contributor: 'Dave Collison' },
				{ title: 'Keep The Doctor Away', author: 'Anna Paula Day', contributor: 'Dave Collison' },
				{ title: 'Everybody In The Whole Cell Block', author: 'Jay Louse-Rock', contributor: 'Dave Collison' },
				{ title: "I'm Immortal", author: 'Olive Forever', contributor: 'Dave Collison' },
				{ title: 'All The Words', author: 'Dick Shonnery', contributor: 'Dave Collison' },
				{ title: 'My Life Is A Musical', author: 'Aneeta Singh', contributor: 'Dave Collison' },
				{ title: 'The Stress Of Christmas', author: 'Gladys Allover', contributor: 'Dave Collison' },
				{ title: 'A Slap In The Face', author: 'Martha Kinnear', contributor: 'Dave Collison' },
				{ title: 'I Who Have Nothing', author: 'Jack Shitt', contributor: 'Dave Collison' },
				{ title: 'One Of Those Days', author: 'Arthur Fuksake', contributor: 'Dave Collison' },
				{ title: 'Obeying Authority', author: 'Donna Doodat', contributor: 'Dave Collison' },
				{ title: "It's A Dirty Job", author: 'Ken Choo-Dewit', contributor: 'Dave Collison' },
				{ title: 'The Kettle Drum', author: 'Tim Penny', contributor: 'Dave Collison' },
				{ title: 'The Fear Response', author: 'Yoshi Chorpants', contributor: 'Dave Collison' },
				{ title: 'The Need To Break Wind', author: 'Ivana Trump', contributor: 'Dave Collison' },
				{ title: "Everything's Ok", author: 'Justin Denial', contributor: 'Dave Collison' },
				{ title: '30 Seconds More', author: 'Neil E. Dunn', contributor: 'Dave Collison' },
				{ title: 'How To Enjoy A Cup Of Tea', author: 'Duncan Biskitts', contributor: 'Dave Collison' },
				{ title: 'How To Speak Italian', author: 'Donna Askami', contributor: 'Dave Collison' },
				{ title: 'The Axe', author: "Tom O'Hawke", contributor: 'Dave Collison' },
				{ title: 'Looking Back', author: 'Reah View', contributor: 'Dave Collison' },
				{ title: 'A Dreadful Tale', author: 'Abby Small', contributor: 'Dave Collison' },
				{ title: 'Slowly Dying', author: 'Fay Deway and Peta Owt', contributor: 'Dave Collison' },
				{ title: 'The Almost Empty Cupboard', author: 'Tina Tuna', contributor: 'Dave Collison' },
				{ title: 'The Office Thief', author: 'Nick Aldistock', contributor: 'Dave Collison' },
				{ title: 'Moving Rubble', author: 'Will Barrow', contributor: 'Dave Collison' },
				{ title: 'The Gravity Of The Situation', author: 'Ashley Bean-Sirius', contributor: 'Dave Collison' },
				{ title: 'Unbelievable Facts', author: 'Justin Saine', contributor: 'Dave Collison' },
				{ title: 'Leo Tolstoy', author: 'Warren Peace', contributor: 'Dave Collison' },
				{ title: 'The Drowning Man', author: 'Bob Dunder', contributor: 'Dave Collison' },
				{ title: 'Involuntary Gas', author: 'Fletcher Lance', contributor: 'Dave Collison' },
				{ title: 'Look After Your Voice', author: 'Sir Munion-Lemmon', contributor: 'Dave Collison' },
				{ title: 'Walking On Eggshells', author: 'Harley Strung', contributor: 'Dave Collison' },
				{ title: 'Getting The Worm', author: 'Earl E. Bird', contributor: 'Dave Collison' },
				{ title: 'Filling In Tax Returns', author: 'Barry Le Laffs', contributor: 'Dave Collison' },
				{ title: 'Band Auditions', author: 'Kenny Singh', contributor: 'Dave Collison' },
				{ title: 'Sounds Legit', author: 'Billy Vabble', contributor: 'Dave Collison' },
				{ title: 'Cross The River With Care', author: 'Ricky T. Bridges', contributor: 'Dave Collison' },
				{ title: 'Group Therapy', author: 'Sharon Feelings', contributor: 'Dave Collison' },
				{ title: 'What Does Viagra Do?', author: 'Maxi Tardigan', contributor: 'Dave Collison' },
				{ title: 'The Stiff', author: "Rick O'Mortis", contributor: 'Dave Collison' },
				{ title: "Who's Next?", author: 'Izzy Stern', contributor: 'Dave Collison' },
				{ title: 'Ms, Miss or Mrs?', author: 'Mary Tall-Status', contributor: 'Dave Collison' },
				{ title: 'Sneezes and Itches', author: 'Al Lurjees', contributor: 'Dave Collison' },
				{ title: "We Won't Meet Again", author: 'Owen U. Money', contributor: 'Dave Collison' },
				{
					title: 'Major Euphemisms',
					author: 'Sergeant Esticles and Captain Ackers',
					contributor: 'Dave Collison'
				},
				{ title: 'Places To Visit In Mexico', author: 'Rico Mendez', contributor: 'Dave Collison' },
				{ title: "If I've Told You Once", author: 'Harmony Moore-Times', contributor: 'Dave Collison' },
				{ title: 'Through The Spyglass', author: 'Ken Ivor Looke', contributor: 'Dave Collison' },
				{ title: 'Blown Away', author: 'Augusta Wind', contributor: 'Dave Collison' },
				{ title: 'The Local', author: 'Dandy Road', contributor: 'Dave Collison' },
				{ title: 'Haunted House', author: 'Hugo Furst', contributor: 'Dave Collison' },
				{ title: 'Umbrellas Are Useless', author: 'Wendy Windblows', contributor: 'Dave Collison' },
				{ title: 'Clothes For Dummies', author: 'Manny Quinn', contributor: 'Dave Collison' },
				{ title: 'Where are you?', author: 'Colin Yoname', contributor: 'Damien' }
			],
			index: 0,
			lightmode: false
		};

		this.firstIndex = this.firstIndex.bind(this);
		this.previousIndex = this.previousIndex.bind(this);
		this.nextIndex = this.nextIndex.bind(this);
		this.lastIndex = this.lastIndex.bind(this);
		this.randomIndex = this.randomIndex.bind(this);
		this.checkButtons = this.checkButtons.bind(this);
		this.toggleDarkMode = this.toggleDarkMode.bind(this);
	}

	firstIndex = () => {
		this.setState({
			index: 0
		});
		this.checkButtons(0);
		return 0;
	};

	previousIndex = () => {
		const previousIndex = this.state.index - 1;
		this.setState({
			index: previousIndex
		});
		this.checkButtons(previousIndex);
		return previousIndex;
	};

	nextIndex = () => {
		const nextIndex = this.state.index + 1;
		this.setState({
			index: nextIndex
		});
		this.checkButtons(nextIndex);
		return nextIndex;
	};

	lastIndex = () => {
		const lastIndex = this.state.books.length - 1;
		this.setState({
			index: lastIndex
		});
		this.checkButtons(lastIndex);
		return lastIndex;
	};

	randomIndex = () => {
      const currentIndex = this.state.index;
      var randomIndex = currentIndex;

      do {
        randomIndex = Math.floor(Math.random() * this.state.books.length)
      } while ((currentIndex === randomIndex) && (this.state.books.length > 1));

			this.setState({
				index: randomIndex
			});
		
		this.checkButtons(randomIndex);
		return randomIndex;
	};

	checkButtons = (index) => {
		const lastIndex = this.state.books.length - 1;
		const prevButton = document.getElementById('previousIndex');
		const nextButton = document.getElementById('nextIndex');
		const firstButton = document.getElementById('firstIndex');
		const lastButton = document.getElementById('lastIndex');

		if (index === 0) {
			firstButton.setAttribute('disabled', '');
			prevButton.setAttribute('disabled', '');
		} else {
			firstButton.removeAttribute('disabled', '');
			prevButton.removeAttribute('disabled', '');
		}

		if (index === lastIndex) {
			lastButton.setAttribute('disabled', '');
			nextButton.setAttribute('disabled', '');
		} else {
			lastButton.removeAttribute('disabled', '');
			nextButton.removeAttribute('disabled', '');
		}
	};

	toggleDarkMode = () => {
		const newLightMode = !this.state.lightmode;
		this.setState({
			lightmode: newLightMode
		})
		document.querySelector('.App').classList.toggle('lightmode');
	}

	componentDidMount() {
		this.checkButtons(this.randomIndex());
		if (this.state.lightmode) {
			document.querySelector('.App').classList.add('lightmode');
		}
	}

	render() {
		return (
			<div className="App">
				<div className="wrapper">
					<h1>
						<i className="fa fa-bookmark" aria-hidden="true" /> Fictional Books Library V0.1
					</h1>
					<div className="book-details">
          <div className="book-id">
		  <i className="fas fa-book-open fa-2x"></i>
          <p className="book-number">{this.state.index + 1}</p></div>
          <div className="title-and-author">

						<div><span className="book-title">{this.state.books[this.state.index].title}</span></div>
						<cite>{this.state.books[this.state.index].author}</cite>
					</div>
          </div>
					<div className="button-panel">
						<button id="firstIndex" onClick={this.firstIndex}>
						<i class="fas fa-angle-double-left"></i> First
						</button>
						<button id="previousIndex" onClick={this.previousIndex}>
						<i class="fas fa-angle-left"></i> Previous
						</button>
						<button id="randomIndex" onClick={this.randomIndex}>
						<i class="fas fa-random"></i> Random
						</button>
						<button id="nextIndex" onClick={this.nextIndex}>
						<i class="fas fa-angle-right"></i> Next
						</button>
						<button id="lastIndex" onClick={this.lastIndex}>
						<i class="fas fa-angle-double-right"></i> Last
						</button>
					</div>
				</div>
				<button onClick={this.toggleDarkMode} className="button-round"><i class="far fa-lightbulb"></i></button>
			</div>
		);
	}
}

export default App;
