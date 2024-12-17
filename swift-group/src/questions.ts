interface Questions{
    id: number;
    img: {
        url: string;
        alt: string;
        width: number;
        height: number;
    };
    question: string;
    answer: { [key: string]: boolean };
}
  
const questionList: Questions[] = [
    {
        id: 1,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What was the first full-length animated movie released by Disney?',
        answer: {
            'Cinderella': false,
            'Snow White and the Seven Dwarfs': true,
            'Pinocchio': false
        }
    },
    {
        id: 2,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What is the name of Mickey Mouse\'s dog?',
        answer: {
            'Goofy': false,
            'Pluto': true,
            'Max': false
        }
    },
    {
        id: 3,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'In The Lion King, what is Simba\'s uncle\'s name?',
        answer: {
            'Scar': true,
            'Zazu': false,
            'Rafiki': false
        }
    },
    {
        id: 4,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'Which Disney movie features a flying elephant?',
        answer: {
            'Dumbo': true,
            'Bambi': false,
            'Fantasia': false
        }
    },
    {
        id: 5,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What is the name of the toy cowboy in Toy Story?',
        answer: {
            'Woody': true,
            'Buzz': false,
            'Jessie': false
        }
    },
    {
        id: 6,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'Which Disney princess has a pet tiger named Rajah?',
        answer: {
            'Jasmine': true,
            'Ariel': false,
            'Pocahontas': false
        }
    },
    {
        id: 7,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What kind of animal is Bambi?',
        answer: {
            'Rabbit': false,
            'Deer': true,
            'Fox': false
        }
    },
    {
        id: 8,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What is the name of the princess in The Princess and the Frog?',
        answer: {
            'Tiana': true,
            'Charlotte': false,
            'Belle': false
        }
    },
    {
        id: 9,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'Who is the villain in 101 Dalmatians?',
        answer: {
            'Ursula': false,
            'Cruella de Vil': true,
            'Maleficent': false
        }
    },
    {
        id: 10,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What is the name of Ariel\'s crab friend in The Little Mermaid?',
        answer: {
            'Sebastian': true,
            'Flounder': false,
            'Scuttle': false
        }
    },
    {
        id: 11,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'In Frozen, what is the name of Anna and Elsa\'s kingdom?',
        answer: {
            'Arendelle': true,
            'Corona': false,
            'Atlantica': false
        }
    },
    {
        id: 12,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What is the name of the circus in Dumbo?',
        answer: {
            'Ringling Bros.': false,
            'WDP Circus': false,
            'Medici Brothers\' Circus': true
        }
    },
    {
        id: 13,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What is the name of Simba\'s best friend in The Lion King?',
        answer: {
            'Nala': true,
            'Timon': false,
            'Pumbaa': false
        }
    },
    {
        id: 14,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What is the name of the main character in Hercules?',
        answer: {
            'Zeus': false,
            'Hades': false,
            'Hercules': true
        }
    },
    {
        id: 15,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'Which Disney movie features the song "A Whole New World"?',
        answer: {
            'Aladdin': true,
            'The Little Mermaid': false,
            'Beauty and the Beast': false
        }
    },
    {
        id: 16,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'Who is the fashion designer in The Incredibles?',
        answer: {
            'Edna Mode': true,
            'Evelyn Deavor': false,
            'Mirage': false
        }
    },
    {
        id: 17,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What kind of animal is Shere Khan in The Jungle Book?',
        answer: {
            'Lion': false,
            'Tiger': true,
            'Panther': false
        }
    },
    {
        id: 18,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'Which Disney movie is set on the island of Motunui?',
        answer: {
            'Moana': true,
            'Lilo & Stitch': false,
            'Atlantis: The Lost Empire': false
        }
    },
    {   
        id: 19,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'Who is the first Disney princess?',
        answer: {
            'Cinderella': false,
            'Aurora': false,
            'Snow White': true
        }
    },
    {
        id: 20,
        img: {
            url: '', 
            alt: '',
            width: 100,
            height: 100
        },
        question: 'What is the name of the dragon in Mulan?',
        answer: {
            'Mushu': true,
            'Shifu': false,
            'Khan': false
        }
    }
];