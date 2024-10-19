import { category_routes } from '@/src/mocks/data';
import { static_page_routes } from '@/src/mocks/static_pages';
import CategoryPage from '@/src/mypages/CategoryPage';
import StaticPage from '@/src/mypages/StaticPage';
import { notFound } from 'next/navigation';

// Функция для статической генерации параметров
export async function generateStaticParams() {
  const categoryPaths = category_routes.map((route) => ({ slug: route }));
  const staticPaths = static_page_routes.map((route) => ({ slug: route }));

  // Возвращаем статические маршруты для предварительной генерации
  return [...categoryPaths, ...staticPaths];
}

// Опция динамической генерации страниц при первом запросе
export const dynamicParams = true; // Это включает поддержку динамических параметров

export default function SlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  let children = null;

  if (category_routes.includes(slug)) {
    children = <CategoryPage category={slug} />;
  } else if (static_page_routes.includes(slug)) {
    children = <StaticPage page={slug} />;
  }

  if (children === null) {
    notFound();
  }

  return <>{children}</>;
}
