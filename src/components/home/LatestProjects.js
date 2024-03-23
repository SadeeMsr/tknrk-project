import Button from "../shared/Button";
import Slider from "../shared/Slider";

export default function LatestProjects({latestProjects}) {
  return (
    <div className="mt-20">
        <div className="flex justify-between items-center py-5 border-b border-slate-300">
        <h1 className="uppercase text-slate-600">Latest Projects</h1>
        </div>
        <div className="mt-14">
            <Slider latestProjects={latestProjects} />
        </div>
    </div>
  )
}
