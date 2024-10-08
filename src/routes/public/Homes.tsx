import { useState, useEffect, useCallback, useRef } from 'react';
import PageLayout from '../../layouts/PageLayout';
import HomeCard from '../../components/HomeCard/HomeCard';
import HomeCardSkeleton from '../../components/HomeCard/HomeCardSkeleton';
import api from '../../api/axios';
import { HomeCardDTO, PaginatedResponse } from '../../types/api';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import VideoHero from '../../components/VideoHero';

const Homes = () => {
  const [homes, setHomes] = useState<HomeCardDTO[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const { observe, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  //Hero sources
  const videoSources = {
    tablet: {
      webm: '', // No WebM for tablet/mobile
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/homes-hero-720.mp4`,
    },
    desktop: {
      webm: `https://db36hfj0unq27.cloudfront.net/hero-videos/homes-hero-1080.webm`,
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/homes-hero-720.mp4`, // Fallback Mp4 for desktop
    },
  };

  const posterSource = `https://db36hfj0unq27.cloudfront.net/regular-content/homes-hero-poster.webp`;

  const loadHomes = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const response = await api.get<PaginatedResponse<HomeCardDTO>>(
        '/api/public/homes',
        {
          params: { page, size: 4 },
        }
      );
      setHomes((prevHomes) => [...prevHomes, ...response.data.content]);
      setHasMore(!response.data.last);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching homes:', error);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  useEffect(() => {
    if (isIntersecting) {
      loadHomes();
    }
  }, [isIntersecting, loadHomes]);

  useEffect(() => {
    if (bottomRef.current) {
      observe(bottomRef.current);
    }
  }, [observe, bottomRef]);

  return (
    <PageLayout>
      <section className="relative">
        <h1 className="absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul text-accent mt-20 px-6">
          Find Your <span className="font-editorial_ul_italic">Dream Home</span>{' '}
          In San Diego
        </h1>
        <VideoHero videoSources={videoSources} posterSource={posterSource} />
      </section>

      <section className="px-6 py-20 font-haas_roman">
        <h2 className="text-4xl font-editorial_ul text-center">
          Life Is Too Short To Settle On A Home
        </h2>
        <p className="pt-8 text-center">
          There&apos;s nothing quite like an Ade home. Browse through our unique
          homes and schedule a visit with our experts.
        </p>
        <h3 className="text-3xl font-editorial_ul pt-8 text-left">
          Dream Homes By Ade
        </h3>

        <div className="space-y-16 pb-28 pt-10">
          {homes.map((home) => (
            <HomeCard key={home.id} {...home} />
          ))}
          {loading && (
            <>
              <HomeCardSkeleton />
              <HomeCardSkeleton />
              <HomeCardSkeleton />
              <HomeCardSkeleton />
              <HomeCardSkeleton />
            </>
          )}
          <div ref={bottomRef} style={{ height: '10px' }}></div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Homes;
