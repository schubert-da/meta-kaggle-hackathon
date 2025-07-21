<script>
	import { page } from '$app/stores';

	const defaultTitle = 'Why Should I Kaggle?';
	const defaultDescription =
		'An analysis of the Meta Kaggle dataset aiming to understand the role that Kaggle plays in the data science and machine learning landscape';
	const defaultKeywords =
		'kaggle, data science, machine learning, competitions, kernels, analytics, beginner guide';
	const siteUrl = 'https://why-should-i-kaggle.netlify.app/';

	// Dynamic values based on current page
	$: currentUrl = `${siteUrl}${$page.url.pathname}`;
	$: pageTitle = $page.data?.title ? `${$page.data.title} | ${defaultTitle}` : defaultTitle;
	$: pageDescription = $page.data?.description || defaultDescription;
	$: pageKeywords = $page.data?.keywords || defaultKeywords;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{pageTitle}</title>
	<meta name="title" content={pageTitle} />
	<meta name="description" content={pageDescription} />
	<meta name="keywords" content={pageKeywords} />
	<meta name="author" content="Your Name" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />

	<!-- Canonical URL -->
	<link rel="canonical" href={currentUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={`${siteUrl}/image/share-img.jpg`} />
	<meta property="og:site_name" content={defaultTitle} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={currentUrl} />
	<meta property="twitter:title" content={pageTitle} />
	<meta property="twitter:description" content={pageDescription} />
	<meta property="twitter:image" content={`${siteUrl}/image/share-img.jpg`} />

	<!-- Additional SEO -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="utf-8" />
	<meta name="theme-color" content="#1976d2" />

	<!-- Structured Data for Analytics/Data Science Site -->
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": defaultTitle,
			"description": defaultDescription,
			"url": siteUrl,
			"author": {
				"@type": "Person",
				"name": "Schubert de Abreu",
				"url": siteUrl
			},
			"mainEntity": {
				"@type": "Dataset",
				"name": "Kaggle Meta Analysis",
				"description": 'An analysis of the Meta Kaggle dataset aiming to understand the role that Kaggle plays in the data science and machine learning landscape',
				"keywords": pageKeywords
			}
		})}
	</script>

	<!-- Favicon -->
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>
