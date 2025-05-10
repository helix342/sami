
export default function Footer() {
  return (
    <footer className="py-8 bg-portfolio-navy border-t border-white/10 text-white/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Syed Sami U. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed & Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
