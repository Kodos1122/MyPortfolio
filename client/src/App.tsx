import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer"; // Added Footer import


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div> {/* Added div to wrap content and footer */}
        <AnimatePresence mode="wait">
          <Router />
        </AnimatePresence>
        <Toaster />
        <Footer /> {/* Added Footer component */}
      </div>
    </QueryClientProvider>
  );
}

export default App;

// Added Footer component (placeholder - replace with actual implementation)
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <p>&copy; 2023 My Website</p>
    </footer>
  );
};