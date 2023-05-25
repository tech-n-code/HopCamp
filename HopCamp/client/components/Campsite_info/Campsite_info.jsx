import React from 'react'
import './Campsite_info.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import bike from './assets/bike.png';
import boat from './assets/boat.png';
import barn from './assets/barn.png';
import climbing from './assets/climbing.png';
import coast from './assets/coast.png';
import forest from './assets/environment.png';
import farm from './assets/field.png';
import fishing from './assets/fishing.png';
import hiking from './assets/hiking.png';
import horseback from './assets/jockey.png';
import paddle from './assets/paddle.png';
import redwood from './assets/redwood.png';
import river from './assets/river.png';
import surfing from './assets/surfing.png';
import swimmer from './assets/swimmer.png';
import swimming from './assets/swimming.png';
import beach from './assets/vacations.png';
import wildlife from './assets/wildlife.png';
import windsurfing from './assets/windsurfing.png';

const Campsite_info = () => {
    const land = {
        acres: "400",
        totalSites: "7",
        tentSites: "6",
        lodgingSites: "1",
        description: "Located within 45 minutes of the wine country and 2 miles from the coast, our property is 400 acres of rolling hills and redwood groves, with a creek running along its base. With miles of trails meandering through quiet woods and meadows, you will be able to revel in the tranquility of a private preserve, without sacrificing easy access to some of Sonoma County's most famous attractions. A hundred years ago, this land was used to graze sheep. Remnants of the old fence lines can still be seen in places, along with old cement troughs. Since then, the land has been left to its own devices, passing through many hands, most famously owned by two brothers in the 1980's who built a truly amazing tree house in the forest which has been featured in several magazine articles. It was revamped and updated in 2016 by a master craftsman, using fallen redwood logs found on the property and is now a unique structural work of art, available for overnight stays. We produce 100% grass fed, dry-aged beef on our certified organic pastures and have a store on site if you would like to purchase delicious steaks, ribs, ground beef for hamburgers or some roasts to take home. Our cattle graze on the native grasses, never grain, and drink only water produced from our own springs. We also raise Kiko meat goats and produce pastured, certified organic duck eggs on a commercial basis. Whether it's surfing at sandy beaches, award-winning clam chowder, a wine tour, horseback riding or a hot air balloon ride you're after, you won't have far to drive if you make our ranch your base camp. You may see a family of deer appear suddenly, or a few Scottish Highland cows which we allow to roam freely over the property. There are over twenty species of wild birds that grace this protected spot, so bring your binoculars! A portion of your fee goes towards protecting native flora and fauna as part of our private wildlife preservation program. A limited number of private, widely spaced camp spots are available for visitors. The Eagles' Nest Treehouse (mentioned above) is very isolated and you may or may not even be aware that there are other people within miles of you. For those who value nature, seclusion, quiet and the artistry of old growth redwood, this is the place for you.",
        activities: ['Biking', 'Boating', 'Fishing', 'Hiking', 'Horseback riding', 'Paddling', 'Wind sports','Climbing','Surfing','Swimming','Wildlife watching'],
        activitiesImg: [bike,boat,fishing, hiking, horseback, paddle, windsurfing, climbing, surfing, swimmer, wildlife],
        naturalFeatures: ['Beach', 'Forest', 'Redwoods', 'River, stream, or creek', 'Swimming hole', 'Costal', 'Farm', 'Ranch'],
        naturalFeaturesImg: [beach, forest, redwood, river, swimming, coast,farm, barn]
    }

  return (
    <div>
        <div className={`container | d-flex flex-row mb-3 mt-4`}>
            <div className={`left-side |`} style={{width:'60%'}}>
                <div className={`left-side-header | d-flex flex-row mb-3`}>
                    <div className={`land-size | d-flex flex-column mb-3 pt-2`}>
                        <span className={`fs-3 fw-semibold`}> {land.acres} acres</span>
                        <span className={``}>{land.totalSites} sites</span>
                    </div>
                    <div className="land-sites d-flex flex-row p-2">
                        <div className="d-flex flex-row left-border border-start border-gray px-2">
                            <div className="d-flex flex-column align-items-center me-5">
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.364 8H11.09v3a2 2 0 01-2 2H6.222a2 2 0 01-2-2V6.111a1.111 1.111 0 10-2.222 0v11.98a.91.91 0 101.818 0V16h16.364v2.09a.91.91 0 101.818 0V12c0-2.21-1.627-4-3.636-4z" fill="currentColor"></path>
                                    <path d="M10 9.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill="currentColor"></path>
                                </svg>
                                <span>1 lodging</span>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.958 18.647L12.17 5.115a.251.251 0 00-.421 0c-1.215 1.904-7.45 11.557-8.714 13.532-.1.153.025.353.21.353h5.492a.258.258 0 00.21-.118c.57-.894 2.194-3.927 2.777-4.844.111-.176.31-.176.421 0l2.888 4.856c.05.07.124.106.21.106h5.504c.198.011.323-.189.21-.353zm-9.618-5.303L8.39 18.33c-.013.012-.025.024-.038.012-.148-.082-.917-.564-1.76-2.857-.012-.023.013-.035.025-.035.285-.012 1.983-.153 4.685-2.14.025-.023.062 0 .038.035z" fill="currentColor"></path>
                                </svg>
                                <span>6 Tent</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='land-details '>
                    <span className='land-details1'> {land.description} </span>
                    <br />
                    <a role='button' href="" className='text-dark fw-bold' data-bs-toggle='modal' data-bs-target='#descriptionModal'>{`Show more >`}</a>
                </div>
            </div>
            
            <div className=''>

            <div className="row">
                <div className="col-md-6 pe-5">
                    <div className="fs-4 fw-semibold mb-4">Activity</div>
                    {land.activities.slice(0, 4).map((element, index) => (
                    <div className="d-flex gap-3 pb-3" key={index}>
                        <img src={land.activitiesImg[index]} style={{ height: '25px', width: '25px' }} alt={element} />
                        {element}
                    </div>
                    ))}
                    <a role='button' href="" className='text-dark fw-bold' data-bs-toggle='modal' data-bs-target='#activityModal'>{`Show more >`}</a>
                </div>

                <div className="col-md-6 ps-5">
                    <div className="fs-4 fw-semibold mb-4 text-nowrap">Natural Features</div>
                    {land.naturalFeatures.slice(0, 4).map((element, index) => (
                    <div className="d-flex gap-3 pb-3 text-nowrap" key={index}>
                        <img src={land.naturalFeaturesImg[index]} style={{ height: '25px', width: '25px' }} alt={element} />
                        {element}
                    </div>
                    ))}
                    <a role='button' href="" className='text-dark fw-bold' data-bs-toggle='modal' data-bs-target='#featuresModal'>{`Show more >`}</a>
                </div>
            </div>

            </div>

            
            {/*Modal*/}

            <div className='modal fade' id='descriptionModal' tabIndex={-1} aria-labelledby='modalLabel' aria-hidden="true">
                <div className="modal-dialog d-flex">
                    <div className="modal-content p-5 rounded-5">
                    <div className="modal-header">
                        <div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h1 className="modal-title fs-5 pt-3 fw-bold" id="modalLabel">About</h1>
                        </div>
                        
                    </div>
                    <div className="modal-body">
                        {land.description}
                    </div>
                    </div>
                </div>
                </div>

                <div className='modal fade' id='activityModal' tabIndex={-1} aria-labelledby='modalLabel' aria-hidden="true">
                <div className="modal-dialog d-flex" style={{width:'600px'}}>
                    <div className="modal-content p-3 rounded-5">
                    <div className="modal-header">
                        <div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h1 className="modal-title fs-4 pt-3 fw-bold" id="modalLabel">Activities</h1>
                        <h3 className='text-secondary fs-5'>On the land or nearby</h3>
                        </div>
                        
                    </div>
                    <div className="modal-body">
                    {land.activities.map((element, index) => (
                    <div className="d-flex gap-3 pb-3" key={index}>
                        <img src={land.activitiesImg[index]} style={{ height: '25px', width: '25px' }} alt={element} />
                        {element}
                    </div>
                    ))}
                    </div>
                    </div>
                </div>
                </div>

                <div className='modal fade' id='featuresModal' tabIndex={-1} aria-labelledby='modalLabel' aria-hidden="true">
                <div className="modal-dialog d-flex" style={{width:'600px'}}>
                    <div className="modal-content p-3 rounded-5">
                    <div className="modal-header">
                        <div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h1 className="modal-title fs-4 pt-3 fw-bold" id="modalLabel">Natural features</h1>
                        <h3 className='text-secondary fs-5'>On the land or nearby</h3>
                        </div>
                        
                    </div>
                    <div className="modal-body">
                    {land.naturalFeatures.slice(0, 4).map((element, index) => (
                    <div className="d-flex gap-3 pb-3 text-nowrap" key={index}>
                        <img src={land.naturalFeaturesImg[index]} style={{ height: '25px', width: '25px' }} alt={element} />
                        {element}
                    </div>
                    ))}
                    </div>
                    </div>
                </div>
                </div>
           
        </div>
    </div>
  )
}

export default Campsite_info