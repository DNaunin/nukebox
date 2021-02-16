type Props = {
  artist: string;
  title: string;
  image: src;
};

export default function Songitem(props: Props) {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1598099947145-e85739e7ca28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"></img>
      <h4>F Your Purse</h4>
      <p>The Read</p>
    </div>
  );
}
