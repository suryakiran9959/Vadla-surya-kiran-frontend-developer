import "./five.css"
function Five(){
    return(
        <>
        <h3 className="roadmap">Roadmap</h3>
        <img className="rimg" src="/assets/Background.png" alt="" />
        <p className="phase">Phase 1</p>
        <h3 className="kicking">Kicking Off</h3>
        <div className="rmain">
            <p className="r1"> <span><img className="fill" src="/assets/image fill.png" alt="" /></span> Launch of EthAi: Officially</p>
            <p className="r1"> <span><img className="fill" src="/assets/image fill.png" alt="" /></span>Development of Core AI Agents </p>
            <p className="r1"> <span><img className="fill" src="/assets/image fill.png" alt="" /></span>User Onboarding Campaign </p>
            <p className="r1"> <span><img className="fill" src="/assets/image fill.png" alt="" /></span>Community Engagement Initiatives </p>

        </div>
        </>
    )
}
export default Five;