import os

def generate_pdf():
    # A4 size: 595.28 x 841.89 points
    W, H = 595.28, 841.89
    
    class PDFBuilder:
        def __init__(self):
            self.pages = []
            
        def add_page(self):
            stream = []
            self.pages.append(stream)
            return stream

    builder = PDFBuilder()
    p1 = builder.add_page()
    
    def esc(text):
        # Normalize special unicode characters to ASCII/WinAnsi equivalents
        replacements = {
            '\u2013': '-',
            '\u2014': '--',
            '\u2018': "'",
            '\u2019': "'",
            '\u201c': '"',
            '\u201d': '"',
            '\u2022': '*',
            '•': chr(149),
            '–': '-',
            '—': '--'
        }
        for k, v in replacements.items():
            text = text.replace(k, v)
        return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')
    
    # Drawing helpers
    def draw_line(p, x1, y1, x2, y2, r=0.2, g=0.3, b=0.6, width=1.0):
        p.append(f"{r:.3f} {g:.3f} {b:.3f} RG {width:.2f} w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S\n")
        
    def draw_text(p, text, x, y, font="F2", size=10, r=0.1, g=0.1, b=0.1):
        p.append(f"BT /{font} {size:.1f} Tf {r:.3f} {g:.3f} {b:.3f} rg 1 0 0 1 {x:.2f} {y:.2f} Tm ({esc(text)}) Tj ET\n")

    # Header Box Page 1
    margin = 38
    top = H - margin
    
    # Title
    draw_text(p1, "GIRIDHARAN S", margin, top - 20, font="F1", size=22, r=0.08, g=0.15, b=0.45)
    draw_text(p1, "Full Stack Developer", margin + 185, top - 18, font="F1", size=13, r=0.2, g=0.35, b=0.7)
    
    # Contact info grid
    y_contact = top - 42
    draw_text(p1, "Email: giridh2001@gmail.com", margin, y_contact, font="F2", size=9, r=0.2, g=0.25, b=0.35)
    draw_text(p1, "Phone: +91 9080875938", margin + 250, y_contact, font="F2", size=9, r=0.2, g=0.25, b=0.35)
    
    y_contact -= 14
    draw_text(p1, "Location: Karaikudi, Tamil Nadu, India", margin, y_contact, font="F2", size=9, r=0.2, g=0.25, b=0.35)
    draw_text(p1, "LinkedIn: linkedin.com/in/giridharan0810", margin + 250, y_contact, font="F2", size=9, r=0.15, g=0.35, b=0.8)
    
    y_contact -= 14
    draw_text(p1, "GitHub: github.com/giridharan0810", margin, y_contact, font="F2", size=9, r=0.15, g=0.35, b=0.8)
    draw_text(p1, "Portfolio: https://portfolio-h9rf.vercel.app/", margin + 250, y_contact, font="F2", size=9, r=0.15, g=0.35, b=0.8)
    
    # Dividing line
    draw_line(p1, margin, y_contact - 8, W - margin, y_contact - 8, r=0.1, g=0.25, b=0.55, width=1.5)
    
    curr_y = y_contact - 26
    
    def add_section(p, title, y):
        draw_text(p, title.upper(), margin, y, font="F1", size=11, r=0.08, g=0.15, b=0.45)
        draw_line(p, margin, y - 4, W - margin, y - 4, r=0.75, g=0.8, b=0.88, width=1.0)
        return y - 18
        
    curr_y = add_section(p1, "Professional Summary", curr_y)
    summary_lines = [
        "Full Stack Developer with 2 years of experience developing web applications using React.js, JavaScript, Node.js,",
        "Express.js and SQL Server. Experienced in building REST APIs, implementing JWT authentication, developing CRUD",
        "operations and integrating databases. Contributed to CRM, ERP and business applications across frontend and",
        "backend development."
    ]
    for line in summary_lines:
        draw_text(p1, line, margin, curr_y, font="F2", size=9.5, r=0.15, g=0.18, b=0.22)
        curr_y -= 13
        
    curr_y -= 8
    curr_y = add_section(p1, "Professional Experience", curr_y)
    
    # Job 1: VConnex
    draw_text(p1, "VConnex Software Solutions", margin, curr_y, font="F1", size=10.5, r=0.08, g=0.15, b=0.35)
    draw_text(p1, ", Software Developer", margin + 148, curr_y, font="F3", size=10, r=0.25, g=0.35, b=0.65)
    draw_text(p1, "Dec 2025 - Present | Remote", W - margin - 145, curr_y, font="F2", size=9, r=0.4, g=0.45, b=0.5)
    curr_y -= 14
    
    vconnex_bullets = [
        "Develop responsive frontend features using React.js and JavaScript.",
        "Build RESTful APIs and CRUD operations using Node.js and Express.js.",
        "Integrate frontend components with backend APIs and Microsoft SQL Server.",
        "Implement JWT authentication and role-based access control.",
        "Develop assigned features, write SQL queries and resolve frontend/backend issues.",
        "Contribute to LFMS Insurance CRM, College ERP and School ERP projects; use Git and SourceTree for version control."
    ]
    for b in vconnex_bullets:
        draw_text(p1, chr(149), margin + 8, curr_y, font="F1", size=10, r=0.15, g=0.35, b=0.7)
        draw_text(p1, b, margin + 20, curr_y, font="F2", size=9.2, r=0.18, g=0.2, b=0.25)
        curr_y -= 13.5
        
    curr_y -= 6
    # Job 2: Dynamic Liquids
    draw_text(p1, "Dynamic Liquids", margin, curr_y, font="F1", size=10.5, r=0.08, g=0.15, b=0.35)
    draw_text(p1, ", Software Developer", margin + 92, curr_y, font="F3", size=10, r=0.25, g=0.35, b=0.65)
    draw_text(p1, "Dec 2024 - Nov 2025 | Pudukottai", W - margin - 165, curr_y, font="F2", size=9, r=0.4, g=0.45, b=0.5)
    curr_y -= 14
    
    dynamic_bullets = [
        "Developed responsive web applications using React.js, Next.js, HTML, CSS and JavaScript.",
        "Built reusable UI components and interactive features to improve application usability.",
        "Integrated Firebase Authentication and Firestore; implemented data synchronization and used Git/GitHub for version control."
    ]
    for b in dynamic_bullets:
        draw_text(p1, chr(149), margin + 8, curr_y, font="F1", size=10, r=0.15, g=0.35, b=0.7)
        draw_text(p1, b, margin + 20, curr_y, font="F2", size=9.2, r=0.18, g=0.2, b=0.25)
        curr_y -= 13.5
        
    curr_y -= 8
    curr_y = add_section(p1, "Technical Skills", curr_y)
    
    skills_data = [
        ("Programming Languages: ", "JavaScript (ES6+), TypeScript, HTML5, CSS3"),
        ("Frontend Technologies: ", "React.js, Next.js, Bootstrap, Tailwind CSS"),
        ("Backend Technologies: ", "Node.js, Express.js, RESTful APIs"),
        ("Databases: ", "Microsoft SQL Server, Firebase Firestore, MongoDB (Basic)"),
        ("Authentication: ", "JWT, Firebase Authentication"),
        ("Tools & Platforms: ", "Git, GitHub, SourceTree, Postman, VS Code")
    ]
    for cat, val in skills_data:
        draw_text(p1, cat, margin, curr_y, font="F1", size=9.3, r=0.1, g=0.12, b=0.18)
        draw_text(p1, val, margin + 140, curr_y, font="F2", size=9.3, r=0.2, g=0.25, b=0.3)
        curr_y -= 13.5
        
    curr_y -= 8
    curr_y = add_section(p1, "Projects", curr_y)
    
    # Project 1: LFMS Insurance CRM
    draw_text(p1, "LFMS - Insurance CRM", margin, curr_y, font="F1", size=10, r=0.08, g=0.15, b=0.35)
    draw_text(p1, ", Technologies: React.js, TypeScript, Node.js, Express.js, Microsoft SQL Server, ExcelJS", margin + 115, curr_y, font="F3", size=8.5, r=0.35, g=0.4, b=0.5)
    curr_y -= 13
    
    lfms_bullets = [
        "Contributed to developing an insurance CRM application from scratch to manage employees, clients, contracts, opportunities and case management.",
        "Developed dashboard features and business statistics for role-specific insights.",
        "Built Contract, Opportunity and Case Management modules and implemented CRUD functionality for User, Advisor, Carrier and Product management.",
        "Implemented database-driven role-based permissions with Read, Write and Delete access controls.",
        "Designed SQL Server relational tables and implemented Excel export functionality using ExcelJS."
    ]
    for b in lfms_bullets:
        draw_text(p1, chr(149), margin + 8, curr_y, font="F1", size=10, r=0.15, g=0.35, b=0.7)
        draw_text(p1, b, margin + 20, curr_y, font="F2", size=8.8, r=0.18, g=0.2, b=0.25)
        curr_y -= 12.5

    # Page 2
    p2 = builder.add_page()
    curr_y2 = H - margin - 15
    
    # Heading continuation
    draw_text(p2, "GIRIDHARAN S - Full Stack Developer", margin, curr_y2, font="F3", size=9, r=0.4, g=0.45, b=0.55)
    draw_line(p2, margin, curr_y2 - 6, W - margin, curr_y2 - 6, r=0.8, g=0.85, b=0.9, width=0.8)
    curr_y2 -= 24
    
    # Project 2: Metric 360
    draw_text(p2, "Metric 360 - Integrated Insurance Platform", margin, curr_y2, font="F1", size=10, r=0.08, g=0.15, b=0.35)
    draw_text(p2, ", Technologies: React.js, Node.js, Express.js, Microsoft SQL Server", margin + 225, curr_y2, font="F3", size=8.5, r=0.35, g=0.4, b=0.5)
    curr_y2 -= 13
    
    metric_bullets = [
        "Contribute to an insurance management platform designed to consolidate data from six independent third-party applications.",
        "Develop and enhance frontend and backend features using React.js, Node.js and Express.js.",
        "Participate in planning and developing data synchronization workflows, including staging tables and synchronization status tracking.",
        "Troubleshoot application issues and implement assigned feature improvements."
    ]
    for b in metric_bullets:
        draw_text(p2, chr(149), margin + 8, curr_y2, font="F1", size=10, r=0.15, g=0.35, b=0.7)
        draw_text(p2, b, margin + 20, curr_y2, font="F2", size=8.8, r=0.18, g=0.2, b=0.25)
        curr_y2 -= 12.5
        
    curr_y2 -= 6
    # Project 3: ERP
    draw_text(p2, "ERP - Education Management System", margin, curr_y2, font="F1", size=10, r=0.08, g=0.15, b=0.35)
    draw_text(p2, ", Technologies: React.js, TypeScript, Node.js, Express.js, Microsoft SQL Server", margin + 215, curr_y2, font="F3", size=8.5, r=0.35, g=0.4, b=0.5)
    curr_y2 -= 13
    
    erp_bullets = [
        "Contribute to the initial development of an education management ERP system, participating in requirement discussions and application workflow planning.",
        "Implemented role-based login functionality for Student, HOD, Staff and Admin users; currently involved in developing CRUD operations for ERP modules."
    ]
    for b in erp_bullets:
        draw_text(p2, chr(149), margin + 8, curr_y2, font="F1", size=10, r=0.15, g=0.35, b=0.7)
        draw_text(p2, b, margin + 20, curr_y2, font="F2", size=8.8, r=0.18, g=0.2, b=0.25)
        curr_y2 -= 12.5

    curr_y2 -= 6
    # Project 4: POS Billing Web Application
    draw_text(p2, "POS Billing Web Application", margin, curr_y2, font="F1", size=10, r=0.08, g=0.15, b=0.35)
    draw_text(p2, ", Technologies: Next.js, Firebase", margin + 160, curr_y2, font="F3", size=8.5, r=0.35, g=0.4, b=0.5)
    curr_y2 -= 13
    
    pos_bullets = [
        "Developed a POS billing application with secure authentication, real-time database synchronization, product management, sales processing and inventory tracking.",
        "Implemented invoice generation, ledger management and daily/monthly sales reporting with a responsive user interface."
    ]
    for b in pos_bullets:
        draw_text(p2, chr(149), margin + 8, curr_y2, font="F1", size=10, r=0.15, g=0.35, b=0.7)
        draw_text(p2, b, margin + 20, curr_y2, font="F2", size=8.8, r=0.18, g=0.2, b=0.25)
        curr_y2 -= 12.5

    curr_y2 -= 6
    # Project 5: LMS
    draw_text(p2, "Learning Management System (LMS)", margin, curr_y2, font="F1", size=10, r=0.08, g=0.15, b=0.35)
    draw_text(p2, ", Technologies: Next.js, Firebase", margin + 200, curr_y2, font="F3", size=8.5, r=0.35, g=0.4, b=0.5)
    curr_y2 -= 13
    
    lms_bullets = [
        "Developed an LMS platform with secure authentication, course management and separate dashboards for Admin, Author and User roles.",
        "Implemented course uploads, paid and free course modules, course purchases, student enrollment and learning progress tracking."
    ]
    for b in lms_bullets:
        draw_text(p2, chr(149), margin + 8, curr_y2, font="F1", size=10, r=0.15, g=0.35, b=0.7)
        draw_text(p2, b, margin + 20, curr_y2, font="F2", size=8.8, r=0.18, g=0.2, b=0.25)
        curr_y2 -= 12.5

    curr_y2 -= 16
    curr_y2 = add_section(p2, "Education", curr_y2)
    draw_text(p2, "Mahendra Engineering College, Namakkal", margin, curr_y2, font="F1", size=10, r=0.08, g=0.15, b=0.35)
    draw_text(p2, "2020 - 2024", W - margin - 75, curr_y2, font="F2", size=9.5, r=0.4, g=0.45, b=0.5)
    curr_y2 -= 14
    draw_text(p2, "Bachelor of Computer Science and Engineering - CGPA: 8.33", margin, curr_y2, font="F2", size=9.5, r=0.18, g=0.2, b=0.25)

    curr_y2 -= 20
    curr_y2 = add_section(p2, "Soft Skills", curr_y2)
    soft_skills = ["Problem Solving", "Leadership", "Quick Learner", "Agile Methodology"]
    x_soft = margin
    for s in soft_skills:
        draw_text(p2, chr(149), x_soft, curr_y2, font="F1", size=10, r=0.15, g=0.35, b=0.7)
        draw_text(p2, s, x_soft + 10, curr_y2, font="F2", size=9.5, r=0.18, g=0.2, b=0.25)
        x_soft += 125

    # Assemble PDF Objects
    page1_stream_data = "".join(p1).encode('latin-1')
    page2_stream_data = "".join(p2).encode('latin-1')
    
    obj_catalog = b"<< /Type /Catalog /Pages 2 0 R >>"
    obj_pages = b"<< /Type /Pages /Kids [6 0 R 8 0 R] /Count 2 >>"
    obj_f1 = b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"
    obj_f2 = b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"
    obj_f3 = b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>"
    
    obj_page1 = f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {W:.2f} {H:.2f}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents 7 0 R >>".encode('latin-1')
    obj_stream1 = f"<< /Length {len(page1_stream_data)} >>\nstream\n".encode('latin-1') + page1_stream_data + b"\nendstream"
    
    obj_page2 = f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {W:.2f} {H:.2f}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents 9 0 R >>".encode('latin-1')
    obj_stream2 = f"<< /Length {len(page2_stream_data)} >>\nstream\n".encode('latin-1') + page2_stream_data + b"\nendstream"
    
    all_objs = [
        obj_catalog,   # 1
        obj_pages,     # 2
        obj_f1,        # 3
        obj_f2,        # 4
        obj_f3,        # 5
        obj_page1,     # 6
        obj_stream1,   # 7
        obj_page2,     # 8
        obj_stream2    # 9
    ]
    
    pdf = bytearray()
    pdf.extend(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    
    offsets = []
    for i, obj in enumerate(all_objs, 1):
        offsets.append(len(pdf))
        pdf.extend(f"{i} 0 obj\n".encode('latin-1'))
        pdf.extend(obj)
        pdf.extend(b"\nendobj\n")
        
    start_xref = len(pdf)
    pdf.extend(b"xref\n")
    pdf.extend(f"0 {len(all_objs) + 1}\n".encode('latin-1'))
    pdf.extend(b"0000000000 65535 f \n")
    for off in offsets:
        pdf.extend(f"{off:010d} 00000 n \n".encode('latin-1'))
        
    pdf.extend(b"trailer\n")
    pdf.extend(f"<< /Size {len(all_objs) + 1} /Root 1 0 R >>\nstartxref\n{start_xref}\n%%EOF\n".encode('latin-1'))
    
    out_path = os.path.join("public", "Giridharan_S_Resume.pdf")
    with open(out_path, "wb") as f:
        f.write(pdf)
    print(f"Generated PDF file: {out_path} ({len(pdf)} bytes)")

if __name__ == "__main__":
    generate_pdf()
