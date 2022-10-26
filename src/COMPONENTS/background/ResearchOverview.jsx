
import { nanoid } from "nanoid"
import './_research-overview.sass';


export default function ResearchOverview() {

    return (

        <div id='research-overview' key={nanoid()} >

            <div className='content' key={nanoid()}  >

                <div className='intro' key={nanoid()} >
                    <p key={nanoid()}  >
                        My journey began in Behavior Analysis, with the problem of learning, or behavior dynamics.
                    </p>
                </div>

                <div className='question' key={nanoid()} >
                    <p key={nanoid()}>
                        All phenomena examined in the lab emerge from combinations of reinforcers, punishers, and contextual cues. The question is how.
                    </p>
                </div>


                <div className='intro1' key={nanoid()} >
                    <p key={nanoid()}>
                        I approached this phenomenon<br />
                        from two converging directions.
                    </p>
                </div>


                <div className='modeling' key={nanoid()} >
                    <h1 key={nanoid()}>
                        Computational modeling
                    </h1>
                    <p key={nanoid()}>
                        I use computer simulations to explore dynamic theories of learning.
                    </p>



                </div>


                <div className='human' key={nanoid()} >
                    <h1 key={nanoid()}>
                        Live research
                    </h1>
                    <p key={nanoid()}>
                        I used human laboratory studies to verify computational predictions, to guide theoretical developments, and to create new benchmarks.
                    </p>

                </div>

                {/* <p key={nanoid()}>
                    Let's see an example.
                </p> */}

            </div>


        </div >

    )
}

