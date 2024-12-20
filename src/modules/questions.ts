export interface Questions{
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
  
export const questionList: Questions[] = [
    {
        id: 1,
        img: {
            url: 'images/question-1.webp', 
            alt: 'The Cinderella castle surrounded by a lake and a sunset sky.',
            width: 1600,
            height: 900
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
            url: 'images/question-2.webp', 
            alt: 'Mickey Mouse hugging his companion, Pluto the dog.',
            width: 736,
            height: 736
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
            url: 'images/question-3.webp', 
            alt: 'Scar the lion from The Lion King.',
            width: 1232,
            height: 1232
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
            url: 'images/question-4.webp', 
            alt: 'Dumbo the elephan flying in the air.',
            width: 700,
            height: 700
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
            url: 'images/question-5.webp', 
            alt: 'Woody the toy cowboy riding Bullseye the toy horse, in a desert surrounded by cacti.',
            width: 1024,
            height: 1024
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
            url: 'images/question-6.webp', 
            alt: 'Portrait of Rajah the tiger from Alladin.',
            width: 2400,
            height: 2400
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
            url: 'images/question-7.webp', 
            alt: 'Collage of several Disney animal characters.',
            width: 2048,
            height: 2048
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
            url: 'images/question-8.webp', 
            alt: 'Princess Tiana with an unsure facial expression, holding the Frog.',
            width: 800,
            height: 800
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
            url: 'images/question-9.webp', 
            alt: 'The dalmations of 101 Dalmations.',
            width: 900,
            height: 900
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
            url: 'images/question-10.webp', 
            alt: 'Sabastian the crab and Flounder the fish, in both 2D animation and live action.',
            width: 1536,
            height: 1536
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
            url: 'images/question-11.webp', 
            alt: 'Portrait of sisters queen Elsa and princess Anna from Frozen.',
            width: 1024,
            height: 768
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
            url: 'images/question-12.webp', 
            alt: 'The yellow circus tent from Dumbo.',
            width: 1440,
            height: 1080
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
            url: 'images/question-13.webp', 
            alt: 'Close up of young Simba and young Nala looking at each other.',
            width: 1920,
            height: 960
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
            url: 'images/question-14.webp', 
            alt: 'Hercules together with Philoctetes, measuring his muscular arm.',
            width: 1600,
            height: 800
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
            url: 'images/question-15.webp', 
            alt: 'A black haired woman in a red dress and bow, singing into a microphone.',
            width: 1024,
            height: 1024
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
            url: 'images/question-16.webp', 
            alt: 'Portait of Edna Mode from The Incredibles.',
            width: 1920,
            height: 802
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
            url: 'images/question-17.webp', 
            alt: 'Mowgli the human child and Kaa the snake sitting in a tree, looking at each other.',
            width: 3000,
            height: 2164
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
            url: 'images/question-18.webp', 
            alt: 'The island of Motunui from Moana, surrounde by the sea and a colorful sky.',
            width: 1920,
            height: 800
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
            url: 'images/question-19.webp', 
            alt: 'Mutiple Disney princesses, standing next to each other.',
            width: 1200,
            height: 798
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
            url: 'images/question-20.webp', 
            alt: 'Mulan together with Mushu the dragon, Cri-Kee the cricket and Khan the horse, standing in a bamboo forest.',
            width: 1024,
            height: 576
        },
        question: 'What is the name of the dragon in Mulan?',
        answer: {
            'Mushu': true,
            'Shifu': false,
            'Khan': false
        }
    }
]