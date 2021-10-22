import React from 'react';
import about from './about.jpg'

export function About(){
    return(
        <div>
            <h1>Welcome Amig@s!</h1>
            <p>Join our community to meet with people for different activities.
                Looking for a workout-buddy, a travel partner for a weekend or just a like-minded person for interesting conversations over a nice dinner?
                Here at amig@s we encourage social interactions and our vision is to eliminate lonliness, since our community is being more and more individualistic, separations increases and involuntary solitude is more common than ever.
                Together with an increased rate of 'frome-home-workers' adds to it. Join Amig@s today and without long registration procedures, just get out there and find a friend to hang out with, for just one single occation, our a future friend for life! 
            </p>
            <img src={about} alt="amigas" />
        </div>
        
    )
}