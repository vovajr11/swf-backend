const prepareCoursesResponse = courses => {
  return courses.map(course => {
    const { _id: id, name, description, modules } = course;

    return { id, name, description, modules };
  });
};

module.exports = prepareCoursesResponse;
