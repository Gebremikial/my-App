import React from 'react';
import scrumPokerImg from '../assets/images/Scrum-poker.jpg';
import guidesImg from '../assets/images/Guides.jpg';
import articlesImg from '../assets/images/Articles.jpg';

const InfoCard = () => {
    const cardData = [
        {
            id: 1,
            title: "Scrum Poker",
            desc: "Streamline your team estimation with interactive poker cards.",
            img: scrumPokerImg 
        },
        {
            id: 2,
            title: "Guides",
            desc: "Professional templates to make your mentorship sessions more effective.",
            img: guidesImg
        },
        {
            id: 3,
            title: "Articles",
            desc: "In-depth articles about React and modern web development trends.",
            img: articlesImg
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardData.map((card) => (
                <div 
                    key={card.id} 
                    className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300"
                >
                    <img 
                        src={card.img} 
                        alt={card.title} 
                        className="w-full h-48 object-cover opacity-100 dark:opacity-80" 
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 mb-2">{card.title}</h3>
                        <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                            {card.desc}
                        </p>
                        <button className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-bold hover:underline transition-all">
                            Read more →
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoCard;