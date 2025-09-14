import './shimmer.css'
export default function WavyText({ text }: { text: string }) {
    return (
          <span className="shimmer text-inherit">{text}</span>
    );
}
  