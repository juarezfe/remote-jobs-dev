import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <BookmarksButton />
      </div>
      {children}
    </header>
  );
}
