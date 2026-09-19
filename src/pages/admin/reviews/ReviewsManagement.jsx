import AdminSidebar from "../../../components/layout/AdminSidebar";
import AdminHeader from "../../../components/layout/AdminHeader";

import {
  Box,
  Button,
  Card,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Filter,
  Star,
} from "lucide-react";

/* =========================================
   LAYOUT
========================================= */

const SIDEBAR_WIDTH = 240;
const HEADER_HEIGHT = 64;

/* =========================================
   REVIEWS DATA
========================================= */

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    tour: "Colosseum Night Tour",
    rating: 4,
    review:
      '"Absolutely magical experience! The guide was knowledgeable and friendly."',
    date: "Oct 24, 2023",
    status: "Pending",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Thompson",
    tour: "Kyoto Temples Walk",
    rating: 5,
    review:
      '"Best tour of our trip. Kenta was a wonderful guide who made everything special."',
    date: "Oct 22, 2023",
    status: "Approved",
    avatar: "MT",
  },
  {
    id: 3,
    name: "Anonymous User",
    tour: "Louvre Express Entry",
    rating: 1,
    review: '"[Flagged for inappropriate language] The tour was..."',
    date: "Oct 20, 2023",
    status: "Hidden",
    avatar: "AU",
  },
];

/* =========================================
   STATUS STYLES
========================================= */

const statusStyles = {
  Pending: {
    backgroundColor: "#F0E4FF",
    color: "#7C3AED",
  },

  Approved: {
    backgroundColor: "#D9F7E9",
    color: "#078258",
  },

  Hidden: {
    backgroundColor: "#E5E9F2",
    color: "#657089",
  },
};

/* =========================================
   PAGE
========================================= */

export default function ReviewsManagement() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F7F8FC",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* =====================================
          SIDEBAR
          Independent
      ===================================== */}

      <AdminSidebar />

      {/* =====================================
          HEADER
          AdminHeader owns its own width.
          DO NOT put AdminHeader inside
          another width/position wrapper.
      ===================================== */}

      <AdminHeader />

      {/* =====================================
          MAIN CONTENT
          Only the page content accounts
          for sidebar and header.
      ===================================== */}

      <Box
        component="main"
        sx={{
          ml: {
            xs: 0,
            md: `${SIDEBAR_WIDTH}px`,
          },

          width: {
            xs: "100%",
            md: `calc(100% - ${SIDEBAR_WIDTH}px)`,
          },

          minHeight: "100vh",

          boxSizing: "border-box",

          overflowX: "hidden",

          pt: `${HEADER_HEIGHT}px`,
        }}
      >
        {/* =================================
            PAGE CONTENT
        ================================= */}

        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",

            p: {
              xs: 1.5,
              sm: 2,
              md: 3,
              lg: 4,
            },

            overflowX: "hidden",
          }}
        >
          {/* =================================
              TITLE + AVERAGE RATING
          ================================= */}

          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={2}
            sx={{justifyContent: "space-between", alignItems: {
              xs: "stretch",
              md: "center",
            }, 
              width: "100%",
              mb: 2.5,
            }}
          >
            {/* TITLE */}

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: 21,
                    sm: 24,
                    md: 28,
                  },

                  fontWeight: 700,

                  lineHeight: 1.2,

                  color: "#172033",
                }}
              >
                Reviews Management
              </Typography>

              <Typography
                sx={{
                  mt: 0.6,

                  fontSize: {
                    xs: 11,
                    sm: 12,
                    md: 13,
                  },

                  color: "#687083",
                }}
              >
                Monitor and moderate customer feedback across all tours.
              </Typography>
            </Box>

            {/* AVERAGE RATING */}

            <Card
              elevation={0}
              sx={{
                width: {
                  xs: "100%",
                  sm: 210,
                },

                minWidth: {
                  sm: 210,
                },

                p: 1.3,

                border: "1px solid #E7EAF1",

                borderRadius: 2,

                display: "flex",

                alignItems: "center",

                gap: 1.3,

                backgroundColor: "#FFFFFF",

                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  width: 48,

                  height: 48,

                  flexShrink: 0,

                  borderRadius: "50%",

                  backgroundColor: "#008B67",

                  color: "#FFFFFF",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  fontSize: 17,

                  fontWeight: 700,
                }}
              >
                4.8
              </Box>

              <Box
                sx={{
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 9,

                    fontWeight: 700,

                    color: "#687083",
                  }}
                >
                  AVERAGE RATING
                </Typography>

                <Typography
                  sx={{
                    mt: 0.1,

                    color: "#008B67",

                    fontSize: 13,

                    letterSpacing: 1,

                    lineHeight: 1.3,
                  }}
                >
                  ★★★★★
                </Typography>

                <Typography
                  sx={{
                    mt: 0.2,

                    fontSize: 9,

                    color: "#858B98",
                  }}
                >
                  Based on 1,245 reviews
                </Typography>
              </Box>
            </Card>
          </Stack>

          {/* =================================
              FILTER CARD
          ================================= */}

          <Card
            elevation={0}
            sx={{
              width: "100%",

              boxSizing: "border-box",

              p: {
                xs: 1.5,
                sm: 2,
              },

              mb: 2.2,

              border: "1px solid #E7EAF1",

              borderRadius: 2,

              backgroundColor: "#FFFFFF",
            }}
          >
            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              spacing={1.5}
              sx={{alignItems: {
                xs: "stretch",
                md: "flex-end",
              }, 
                width: "100%",
              }}
            >
              {/* STATUS */}

              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    mb: 0.6,

                    fontSize: 10,

                    fontWeight: 700,

                    color: "#50586B",
                  }}
                >
                  Status
                </Typography>

                <FormControl fullWidth size="small">
                  <Select
                    defaultValue="all"
                    sx={{
                      width: "100%",

                      height: 40,

                      fontSize: 12,

                      borderRadius: 1,
                    }}
                  >
                    <MenuItem value="all">All Statuses</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="approved">Approved</MenuItem>
                    <MenuItem value="hidden">Hidden</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* RATING */}

              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    mb: 0.6,

                    fontSize: 10,

                    fontWeight: 700,

                    color: "#50586B",
                  }}
                >
                  Rating
                </Typography>

                <FormControl fullWidth size="small">
                  <Select
                    defaultValue="all"
                    sx={{
                      width: "100%",

                      height: 40,

                      fontSize: 12,

                      borderRadius: 1,
                    }}
                  >
                    <MenuItem value="all">All Ratings</MenuItem>
                    <MenuItem value="5">5 Stars</MenuItem>
                    <MenuItem value="4">4 Stars</MenuItem>
                    <MenuItem value="3">3 Stars</MenuItem>
                    <MenuItem value="2">2 Stars</MenuItem>
                    <MenuItem value="1">1 Star</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* DATE */}

              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    mb: 0.6,

                    fontSize: 10,

                    fontWeight: 700,

                    color: "#50586B",
                  }}
                >
                  Date Range
                </Typography>

                <Box
                  sx={{
                    width: "100%",

                    height: 40,

                    px: 1.3,

                    boxSizing: "border-box",

                    border: "1px solid #DCE1EB",

                    borderRadius: 1,

                    display: "flex",

                    alignItems: "center",

                    gap: 1,

                    color: "#687083",

                    fontSize: 12,
                  }}
                >
                  <CalendarDays size={16} />

                  <Typography
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    Last 30 Days
                  </Typography>
                </Box>
              </Box>

              {/* APPLY BUTTON */}

              <Button
                variant="contained"
                startIcon={<Filter size={15} />}
                sx={{
                  height: 40,

                  minWidth: {
                    xs: "100%",
                    md: 100,
                  },

                  backgroundColor: "#DCE7FF",

                  color: "#2858C7",

                  boxShadow: "none",

                  textTransform: "none",

                  fontSize: 12,

                  borderRadius: 1,

                  flexShrink: 0,

                  "&:hover": {
                    backgroundColor: "#CFDDFF",

                    boxShadow: "none",
                  },
                }}
              >
                Apply
              </Button>
            </Stack>
          </Card>

          {/* =================================
              REVIEWS TABLE
          ================================= */}

          <Card
            elevation={0}
            sx={{
              width: "100%",

              maxWidth: "100%",

              boxSizing: "border-box",

              border: "1px solid #E7EAF1",

              borderRadius: 2,

              backgroundColor: "#FFFFFF",

              overflow: "hidden",
            }}
          >
            <TableContainer
              sx={{
                width: "100%",

                maxWidth: "100%",

                overflowX: "auto",

                "&::-webkit-scrollbar": {
                  height: 6,
                },

                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#CBD1DC",

                  borderRadius: 10,
                },
              }}
            >
              <Table
                sx={{
                  width: "100%",

                  minWidth: 850,
                }}
              >
                {/* TABLE HEADER */}

                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "#FAFBFE",
                    }}
                  >
                    {[
                      "REVIEWER & TOUR",
                      "RATING",
                      "REVIEW SNIPPET",
                      "DATE",
                      "STATUS",
                      "ACTIONS",
                    ].map((heading) => (
                      <TableCell
                        key={heading}
                        sx={{
                          py: 1.2,

                          px: 1.5,

                          fontSize: 9,

                          fontWeight: 700,

                          color: "#596173",

                          whiteSpace: "nowrap",

                          borderBottom: "1px solid #E7EAF1",
                        }}
                      >
                        {heading}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                {/* TABLE BODY */}

                <TableBody>
                  {reviews.map((review) => (
                    <TableRow
                      key={review.id}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#FAFBFD",
                        },
                      }}
                    >
                      {/* REVIEWER */}

                      <TableCell
                        sx={{
                          py: 1.4,
                          px: 1.5,
                        }}
                      >
                        <Stack sx={{ alignItems: "center" }}
                          direction="row"
                          spacing={1}
                        >
                          <Box
                            sx={{
                              width: 30,

                              height: 30,

                              flexShrink: 0,

                              borderRadius: "50%",

                              backgroundColor: "#E9EDF5",

                              color: "#566174",

                              display: "flex",

                              alignItems: "center",

                              justifyContent: "center",

                              fontSize: 9,

                              fontWeight: 700,
                            }}
                          >
                            {review.avatar}
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontSize: 11,

                                fontWeight: 600,

                                color: "#303848",

                                whiteSpace: "nowrap",
                              }}
                            >
                              {review.name}
                            </Typography>

                            <Typography
                              sx={{
                                mt: 0.2,

                                fontSize: 9,

                                color: "#747C8C",

                                whiteSpace: "nowrap",
                              }}
                            >
                              {review.tour}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>

                      {/* RATING */}

                      <TableCell
                        sx={{
                          py: 1.4,
                          px: 1.5,
                        }}
                      >
                        <Stack direction="row">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              fill={
                                star <= review.rating
                                  ? "currentColor"
                                  : "none"
                              }
                              color={
                                star <= review.rating
                                  ? "#008B67"
                                  : "#B9C0CC"
                              }
                            />
                          ))}
                        </Stack>
                      </TableCell>

                      {/* REVIEW */}

                      <TableCell
                        sx={{
                          py: 1.4,
                          px: 1.5,
                        }}
                      >
                        <Typography
                          sx={{
                            maxWidth: 300,

                            fontSize: 11,

                            lineHeight: 1.5,

                            color: "#303848",
                          }}
                        >
                          {review.review}
                        </Typography>
                      </TableCell>

                      {/* DATE */}

                      <TableCell
                        sx={{
                          py: 1.4,
                          px: 1.5,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 10,

                            whiteSpace: "nowrap",

                            color: "#737B8C",
                          }}
                        >
                          {review.date}
                        </Typography>
                      </TableCell>

                      {/* STATUS */}

                      <TableCell
                        sx={{
                          py: 1.4,
                          px: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            display: "inline-flex",

                            px: 1,

                            py: 0.5,

                            borderRadius: 10,

                            fontSize: 8,

                            fontWeight: 700,

                            textTransform: "uppercase",

                            whiteSpace: "nowrap",

                            ...statusStyles[review.status],
                          }}
                        >
                          {review.status}
                        </Box>
                      </TableCell>

                      {/* ACTION */}

                      <TableCell
                        sx={{
                          py: 1.4,
                          px: 1.5,
                        }}
                      >
                        <Button
                          sx={{
                            minWidth: 25,

                            width: 25,

                            height: 25,

                            p: 0,

                            color: "#687083",

                            fontSize: 18,
                          }}
                        >
                          ⋮
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* =================================
                PAGINATION
            ================================= */}

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={1}
              sx={{justifyContent: "space-between", alignItems: {
                xs: "flex-start",
                sm: "center",
              }, 
                width: "100%",

                boxSizing: "border-box",

                px: 1.5,

                py: 1.3,

                borderTop: "1px solid #EDF0F5",
              }}
            >
              <Typography
                sx={{
                  fontSize: 10,

                  color: "#687083",
                }}
              >
                Showing 1 to 3 of 1,245 results
              </Typography>

              <Stack
                direction="row"
                spacing={0.3}
                sx={{
                  flexWrap: "wrap",
                }}
              >
                {/* PREVIOUS */}

                <Button
                  sx={{
                    minWidth: 27,

                    width: 27,

                    height: 27,

                    p: 0,

                    color: "#687083",
                  }}
                >
                  <ChevronLeft size={15} />
                </Button>

                {/* PAGES */}

                {["1", "2", "3", "...", "41"].map((page) => (
                  <Button
                    key={page}
                    sx={{
                      minWidth: 27,

                      width: 27,

                      height: 27,

                      p: 0,

                      fontSize: 11,

                      borderRadius: 1,

                      color: page === "1" ? "#FFFFFF" : "#687083",

                      backgroundColor:
                        page === "1" ? "#1557C7" : "transparent",

                      "&:hover": {
                        backgroundColor:
                          page === "1" ? "#1557C7" : "#F1F3F7",
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}

                {/* NEXT */}

                <Button
                  sx={{
                    minWidth: 27,

                    width: 27,

                    height: 27,

                    p: 0,

                    color: "#687083",
                  }}
                >
                  <ChevronRight size={15} />
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
