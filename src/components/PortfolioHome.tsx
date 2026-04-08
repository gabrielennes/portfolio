"use client";

import NextLink from "next/link";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { site } from "@/data/site";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How I work", href: "#how-i-work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="caption"
      sx={{ color: "secondary.main", textTransform: "uppercase", letterSpacing: "0.12em" }}
    >
      {children}
    </Typography>
  );
}

export default function PortfolioHome() {
  return (
    <Box className="min-h-screen flex flex-col bg-[#0b0b0f]">
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Toolbar className="max-w-5xl mx-auto w-full px-4 flex-wrap gap-y-2">
          <Typography variant="h6" component="span" sx={{ flexGrow: 1, fontWeight: 700 }}>
            {site.name}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ flexWrap: "wrap", justifyContent: "flex-end" }}
          >
            {nav.map((item) => (
              <Button
                key={item.href}
                component={NextLink}
                href={item.href}
                color="inherit"
                size="small"
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Box component="main" id="home" className="flex-1 flex flex-col">
        <Box className="relative overflow-hidden border-b border-white/10">
          <Box
            className="absolute inset-0 opacity-40"
            sx={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.35), transparent)",
            }}
          />
          <Container maxWidth="md" className="relative py-20 md:py-28 text-center">
            <Typography
              variant="overline"
              sx={{ color: "secondary.main", letterSpacing: "0.2em" }}
            >
              Portfolio
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              className="mt-2 mb-4"
              sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}
            >
              Hi, I&apos;m {site.name}
            </Typography>
            <Typography variant="h5" color="text.secondary" className="mb-2 font-normal">
              {site.title}
            </Typography>
            <Typography
              color="text.secondary"
              className="max-w-xl mx-auto mb-8 leading-relaxed"
            >
              {site.tagline}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Button
                variant="contained"
                size="large"
                component={NextLink}
                href="#projects"
              >
                View projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={NextLink}
                href="#contact"
              >
                Get in touch
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="md" className="py-16 md:py-20" id="about">
          <Typography variant="h4" component="h2" className="mb-2">
            About
          </Typography>
          <Typography color="text.secondary" className="mb-8 leading-relaxed whitespace-pre-line">
            {site.bio}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" className="mb-2">
            Stack & tools
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
            {site.skills.map((s) => (
              <Chip key={s} label={s} size="small" variant="outlined" />
            ))}
          </Stack>
        </Container>

        <Box
          className="bg-black/20 border-y border-white/5 py-16 md:py-20"
          id="how-i-work"
        >
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" className="mb-2">
              {site.howISolveProblems.title}
            </Typography>
            <Typography color="text.secondary" className="mb-6 leading-relaxed">
              {site.howISolveProblems.intro}
            </Typography>
            <Stack component="ul" spacing={2} sx={{ m: 0, pl: 2.5 }}>
              {site.howISolveProblems.points.map((line) => (
                <Typography
                  key={line}
                  component="li"
                  color="text.secondary"
                  sx={{ display: "list-item", pl: 0.5 }}
                >
                  {line}
                </Typography>
              ))}
            </Stack>
          </Container>
        </Box>

        <Box className="py-16 md:py-20" id="projects">
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" className="mb-2">
              Projects
            </Typography>
            <Typography color="text.secondary" className="mb-8">
              Selected work — backend automation, full-stack ERP, and integration APIs.
            </Typography>
            <Stack spacing={4}>
              {site.projects.map((p) => (
                <Card
                  key={p.title}
                  variant="outlined"
                  className="border-white/10"
                  sx={
                    "featured" in p && p.featured
                      ? {
                          borderColor: "primary.main",
                          borderWidth: 1,
                          bgcolor: "rgba(124, 58, 237, 0.06)",
                        }
                      : undefined
                  }
                >
                  <CardContent className="p-6">
                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      className="mb-1"
                      sx={{ flexWrap: "wrap", alignItems: "center" }}
                    >
                      {"featured" in p && p.featured && (
                        <Chip label="Flagship" size="small" color="primary" variant="outlined" />
                      )}
                      <SectionLabel>Project</SectionLabel>
                    </Stack>
                    <Typography variant="h5" component="h3" className="mb-1">
                      {p.title}
                    </Typography>
                    <Typography color="secondary.main" className="mb-4 font-medium">
                      {p.subtitle}
                    </Typography>

                    <Typography variant="subtitle2" color="text.primary" className="mb-1">
                      Problem
                    </Typography>
                    <Typography color="text.secondary" className="mb-4 leading-relaxed">
                      {p.problem}
                    </Typography>

                    <Typography variant="subtitle2" color="text.primary" className="mb-1">
                      Solution
                    </Typography>
                    <Typography color="text.secondary" className="mb-4 leading-relaxed">
                      {p.solution}
                    </Typography>

                    <Typography variant="subtitle2" color="text.secondary" className="mb-2">
                      Tech stack
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      className="mb-4"
                      sx={{ flexWrap: "wrap" }}
                    >
                      {p.stack.map((t) => (
                        <Chip key={t} label={t} size="small" />
                      ))}
                    </Stack>

                    {"challenges" in p && p.challenges.length > 0 && (
                      <>
                        <Typography variant="subtitle2" color="text.primary" className="mb-2">
                          Challenges
                        </Typography>
                        <Stack component="ul" spacing={1} sx={{ m: 0, mb: 3, pl: 2.5 }}>
                          {p.challenges.map((c) => (
                            <Typography
                              key={c}
                              component="li"
                              color="text.secondary"
                              variant="body2"
                              sx={{ display: "list-item" }}
                            >
                              {c}
                            </Typography>
                          ))}
                        </Stack>
                      </>
                    )}

                    {"results" in p && p.results.length > 0 && (
                      <>
                        <Typography variant="subtitle2" color="text.primary" className="mb-2">
                          Results
                        </Typography>
                        <Stack component="ul" spacing={1} sx={{ m: 0, mb: 0, pl: 2.5 }}>
                          {p.results.map((r) => (
                            <Typography
                              key={r}
                              component="li"
                              color="text.secondary"
                              variant="body2"
                              sx={{ display: "list-item" }}
                            >
                              {r}
                            </Typography>
                          ))}
                        </Stack>
                      </>
                    )}

                    {"features" in p && p.features && p.features.length > 0 && (
                      <>
                        <Typography variant="subtitle2" color="text.primary" className="mb-2 mt-3">
                          Features
                        </Typography>
                        <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.5 }}>
                          {p.features.map((f) => (
                            <Typography
                              key={f}
                              component="li"
                              color="text.secondary"
                              variant="body2"
                              sx={{ display: "list-item" }}
                            >
                              {f}
                            </Typography>
                          ))}
                        </Stack>
                      </>
                    )}

                    {"highlights" in p && p.highlights && p.highlights.length > 0 && (
                      <>
                        <Typography variant="subtitle2" color="text.primary" className="mb-2 mt-3">
                          Highlights
                        </Typography>
                        <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.5 }}>
                          {p.highlights.map((h) => (
                            <Typography
                              key={h}
                              component="li"
                              color="text.secondary"
                              variant="body2"
                              sx={{ display: "list-item" }}
                            >
                              {h}
                            </Typography>
                          ))}
                        </Stack>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="sm" className="py-16 md:py-20 text-center" id="contact">
          <Typography variant="h4" component="h2" className="mb-2">
            Contact
          </Typography>
          <Typography color="text.secondary" className="mb-8">
            {site.location}. Reach out on LinkedIn, GitHub, or email.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ justifyContent: "center", flexWrap: "wrap" }}
          >
            <IconButton
              component={Link}
              href={`mailto:${site.email}`}
              aria-label="Email"
              color="primary"
              size="large"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              component={Link}
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              color="primary"
              size="large"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              color="primary"
              size="large"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" color="text.secondary" className="mt-6">
            {site.email}
          </Typography>
        </Container>
      </Box>

      <Box
        component="footer"
        className="py-6 border-t border-white/10 text-center"
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind CSS, and MUI.
        </Typography>
      </Box>
    </Box>
  );
}
