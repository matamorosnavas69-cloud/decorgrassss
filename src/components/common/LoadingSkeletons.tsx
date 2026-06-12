import { Box, Card, Container, Grid, Skeleton, Stack } from '@mui/material';

export const ProductsSkeleton = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section Skeleton */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Skeleton variant="text" height={60} width="60%" sx={{ mx: 'auto', mb: 2 }} animation="wave" />
        <Skeleton variant="text" height={30} width="80%" sx={{ mx: 'auto' }} animation="wave" />
      </Box>

      {/* Products Grid Skeleton */}
      <Grid container spacing={3}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <Skeleton variant="rectangular" height={220} animation="wave" sx={{ borderRadius: '12px 12px 0 0' }} />
              <Box sx={{ p: 3 }}>
                <Skeleton variant="text" height={32} width="70%" sx={{ mb: 2 }} animation="wave" />
                <Skeleton variant="text" height={20} width="100%" sx={{ mb: 1 }} animation="wave" />
                <Skeleton variant="text" height={20} width="85%" sx={{ mb: 3 }} animation="wave" />
                <Skeleton variant="rectangular" height={40} width="50%" sx={{ borderRadius: 2 }} animation="wave" />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const GallerySkeleton = () => {
  return (
    <Box sx={{ pt: 8, minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Header Skeleton */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Skeleton variant="text" height={80} width="60%" sx={{ mx: 'auto', mb: 3 }} animation="wave" />
          <Skeleton variant="text" height={40} width="80%" sx={{ mx: 'auto' }} animation="wave" />
        </Box>

        {/* Categories Skeleton */}
        <Box sx={{ mb: 8, display: 'flex', justifyContent: 'center' }}>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height={48}
                width={140}
                sx={{ borderRadius: 3 }}
                animation="wave"
              />
            ))}
          </Stack>
        </Box>

        {/* Projects Grid Skeleton */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
                <Skeleton variant="rectangular" height={300} animation="wave" />
                <Box sx={{ p: 3 }}>
                  <Skeleton variant="text" height={36} width="80%" sx={{ mb: 2 }} animation="wave" />
                  <Stack spacing={1} sx={{ mb: 2 }}>
                    <Skeleton variant="text" height={20} width="60%" animation="wave" />
                    <Skeleton variant="text" height={20} width="40%" animation="wave" />
                  </Stack>
                  <Skeleton variant="text" height={60} width="100%" sx={{ mb: 2 }} animation="wave" />
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Skeleton variant="rectangular" height={24} width={60} sx={{ borderRadius: 1 }} animation="wave" />
                    <Skeleton variant="rectangular" height={24} width={80} sx={{ borderRadius: 1 }} animation="wave" />
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Gallery Section Skeleton */}
        <Box sx={{ backgroundColor: 'grey.50', py: 10 }}>
          <Container maxWidth="xl">
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Skeleton variant="text" height={50} width="40%" sx={{ mx: 'auto', mb: 2 }} animation="wave" />
              <Skeleton variant="text" height={30} width="60%" sx={{ mx: 'auto' }} animation="wave" />
            </Box>

            <Grid container spacing={2}>
              {Array.from({ length: 12 }).map((_, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Skeleton
                    variant="rectangular"
                    height={Math.random() * 100 + 200}
                    sx={{ borderRadius: 3 }}
                    animation="wave"
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export const ServicesSkeleton = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Skeleton variant="text" height={60} width="60%" sx={{ mx: 'auto', mb: 2 }} animation="wave" />
        <Skeleton variant="text" height={30} width="80%" sx={{ mx: 'auto' }} animation="wave" />
      </Box>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ p: 3, height: '100%', borderRadius: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Skeleton variant="circular" width={48} height={48} sx={{ mr: 2 }} animation="wave" />
                <Skeleton variant="text" height={32} width="60%" animation="wave" />
              </Box>
              <Skeleton variant="text" height={20} width="100%" sx={{ mb: 1 }} animation="wave" />
              <Skeleton variant="text" height={20} width="90%" sx={{ mb: 1 }} animation="wave" />
              <Skeleton variant="text" height={20} width="75%" sx={{ mb: 3 }} animation="wave" />
              <Skeleton variant="rectangular" height={40} width="35%" sx={{ borderRadius: 2 }} animation="wave" />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
