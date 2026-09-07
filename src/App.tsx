import React, { useState, useEffect } from 'react';
import { PageType, Accommodation } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BreadcrumbNav } from './components/BreadcrumbNav';
import { AccommodationDetailModal } from './components/AccommodationDetailModal';
import { IndiaMapPage } from './pages/IndiaMapPage';
import { StateSelectionPage } from './pages/StateSelectionPage';
import { DistrictSelectionPage } from './pages/DistrictSelectionPage';
import { TempleSelectionPage } from './pages/TempleSelectionPage';
import { DestinationInfoPage } from './pages/DestinationInfoPage';
import { HomePage } from './pages/HomePage';
import { TempleDetailPage } from './pages/TempleDetailPage';
import { TempleInfoPage } from './pages/TempleInfoPage';
import { StayCheckPage } from './pages/StayCheckPage';
import { BookSafePage } from './pages/BookSafePage';
import { ReportProblemPage } from './pages/ReportProblemPage';
import { SearchResultsPage } from './pages/SearchResultsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedState, setSelectedState] = useState<string>('andhra-pradesh');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('tirupati');
  const [selectedTemple, setSelectedTemple] = useState<string>('tirupati');
  const [selectedDestination, setSelectedDestination] = useState<string>('lepakshi');

  const [searchQuery, setSearchQuery] = useState<string>('Darshan timings');
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('search-results');
  };

  const isHierarchyPage =
    currentPage === 'home' ||
    currentPage === 'india-map' ||
    currentPage === 'state-selection' ||
    currentPage === 'district-selection' ||
    currentPage === 'temple-selection' ||
    currentPage === 'destination-info' ||
    currentPage === 'temple-detail';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Top Utility Header with Horizontal Nav */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSearch={handleSearch}
        currentSearchQuery={searchQuery}
      />

      {/* Main Content View Container */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation for Utility Internal Pages */}
          {!isHierarchyPage && (
            <BreadcrumbNav
              currentPage={currentPage}
              onNavigate={handleNavigate}
              onBack={() => handleNavigate('home')}
            />
          )}

          {/* 1. Home Page (The Roots of India Flagship) */}
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onSearch={handleSearch}
              onSelectAccommodation={(acc) => setSelectedAccommodation(acc)}
              onSelectTemple={(templeId) => {
                setSelectedTemple(templeId);
                setCurrentPage('temple-detail');
              }}
            />
          )}

          {/* 2. India Map (Explore India - Interactive Map & State Grid) */}
          {currentPage === 'india-map' && (
            <IndiaMapPage
              onNavigate={handleNavigate}
              onSelectState={(stateId) => setSelectedState(stateId)}
            />
          )}

          {/* 3. State Selected (Andhra Pradesh, Karnataka, Odisha, Gujarat, etc.) */}
          {currentPage === 'state-selection' && (
            <StateSelectionPage
              selectedState={selectedState}
              onNavigate={handleNavigate}
              onSelectDistrict={(districtId) => setSelectedDistrict(districtId)}
            />
          )}

          {/* 4. District Selected */}
          {currentPage === 'district-selection' && (
            <DistrictSelectionPage
              selectedDistrict={selectedDistrict}
              onNavigate={handleNavigate}
              onSelectTemple={(templeId) => {
                setSelectedTemple(templeId);
                setCurrentPage('temple-detail');
              }}
              onSelectDestination={(destId) => setSelectedDestination(destId)}
            />
          )}

          {/* 5. Comprehensive Temple Detail Page (All 16 Sacred Shrines) */}
          {currentPage === 'temple-detail' && (
            <TempleDetailPage
              templeId={selectedTemple}
              onNavigate={handleNavigate}
              onSelectAccommodation={(acc) => setSelectedAccommodation(acc)}
              onSelectTemple={(templeId) => setSelectedTemple(templeId)}
            />
          )}

          {/* Legacy & Specialized Views Preserved */}
          {currentPage === 'temple-selection' && (
            <TempleSelectionPage onNavigate={handleNavigate} />
          )}

          {/* Dedicated Destination Guide for Lepakshi, Hampi, and Puri */}
          {currentPage === 'destination-info' && (
            <DestinationInfoPage
              destinationId={selectedDestination}
              onNavigate={handleNavigate}
              onSelectTemple={(templeId) => {
                setSelectedTemple(templeId);
                setCurrentPage('temple-detail');
              }}
            />
          )}

          {/* Internal Pages (Preserved & accessible from Home or nav) */}
          {currentPage === 'temple-info' && (
            <TempleInfoPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'staycheck' && (
            <StayCheckPage
              onNavigate={handleNavigate}
              onSelectAccommodation={(acc) => setSelectedAccommodation(acc)}
            />
          )}

          {currentPage === 'booksafe' && (
            <BookSafePage onNavigate={handleNavigate} />
          )}

          {currentPage === 'report' && (
            <ReportProblemPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'search-results' && (
            <SearchResultsPage
              searchQuery={searchQuery}
              onSearch={handleSearch}
              onNavigate={handleNavigate}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modal for Accommodation Details */}
      <AccommodationDetailModal
        accommodation={selectedAccommodation}
        onClose={() => setSelectedAccommodation(null)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
